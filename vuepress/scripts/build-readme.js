#!/usr/bin/env node
/**
 * 将 vuepress/docs/README.md 中的 VitePress 代码引入语法
 * `<<< @/fragments/javascript/file.js#Region`
 * 替换为实际代码块，生成类似 README.md 的文档
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS_README = path.join(ROOT, "docs", "README.md");
const FRAGMENTS_DIR = path.join(ROOT, "fragments");
const PUBLIC_DIR = path.join(ROOT, "docs", ".vuepress", "public");
const OUTPUT_FILE = path.join(ROOT, "..", "README.md");

/**
 * 从 JS 文件中提取指定 region 的代码内容
 * region 由 `// #region RegionName` 和 `// #endregion RegionName` 标记
 */
function extractRegion(filePath, regionName) {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    const startPattern = new RegExp(`^\\s*//\\s*#region\\s+${regionName}\\s*$`);
    const endPattern = new RegExp(
        `^\\s*//\\s*#endregion\\s+${regionName}\\s*$`,
    );

    let inside = false;
    const regionLines = [];

    for (const line of lines) {
        if (!inside && startPattern.test(line)) {
            inside = true;
            continue;
        }
        if (inside && endPattern.test(line)) {
            break;
        }
        if (inside) {
            regionLines.push(line);
        }
    }

    if (!inside) {
        throw new Error(`Region "${regionName}" not found in ${filePath}`);
    }

    // 去除首尾多余的空行
    while (regionLines.length > 0 && regionLines[0].trim() === "")
        regionLines.shift();
    while (
        regionLines.length > 0 &&
        regionLines[regionLines.length - 1].trim() === ""
    )
        regionLines.pop();

    return regionLines.join("\n");
}

/**
 * 处理单条 <<< @/fragments/javascript/file.js#Region 指令
 */
function resolveCodeInclude(directive) {
    // 匹配格式：<<< @/fragments/javascript/file.js#Region
    const match = directive.match(
        /^<<<\s+@\/fragments\/javascript\/(.+?)(?:#(.+))?$/,
    );
    if (!match) return null;

    const [, filePart, regionName] = match;
    const filePath = path.join(FRAGMENTS_DIR, "javascript", filePart);

    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    let code;
    if (regionName) {
        code = extractRegion(filePath, regionName);
    } else {
        // 无 region 名称时取整个文件内容
        code = fs.readFileSync(filePath, "utf-8").trimEnd();
    }

    return "```js\n" + code + "\n```";
}

/**
 * 替换 VitePress 特有的图片语法为标准 Markdown
 * :src="$withBase('/foo.png')" -> src="vuepress/docs/.vuepress/public/foo.png"
 */
function replaceVuepressImage(line) {
    return line.replace(
        /<img\s+:src="\$withBase\('([^']+)'\)"\s+alt="([^"]+)"\s*\/>/g,
        (original, imgPath, alt) => {
            // imgPath 形如 /foo.png，去掉开头的 / 后在 public 目录下查找
            const fileName = imgPath.replace(/^\//, "");
            const absPath = path.join(PUBLIC_DIR, fileName);
            if (!fs.existsSync(absPath)) {
                console.warn(`Warning: image not found in public dir: ${absPath}`);
                return original;
            }
            const localPath =
                "vuepress/docs/.vuepress/public/" + fileName;
            return `<img alt="${alt}" src="${localPath}" />`;
        },
    );
}

function main() {
    const source = fs.readFileSync(DOCS_README, "utf-8");
    const lines = source.split("\n");
    const output = [];

    for (const line of lines) {
        // 处理代码引入指令（可能有前置空格或在行首）
        const trimmed = line.trim();
        if (trimmed.startsWith("<<<")) {
            try {
                const codeBlock = resolveCodeInclude(trimmed);
                if (codeBlock) {
                    output.push(codeBlock);
                    continue;
                }
            } catch (err) {
                console.error(`Error processing "${trimmed}":`, err.message);
                output.push(line); // 出错时保留原行
                continue;
            }
        }

        // 处理 VitePress 图片语法
        const processedLine = replaceVuepressImage(line);
        output.push(processedLine);
    }

    const result = output.join("\n");
    fs.writeFileSync(OUTPUT_FILE, result, "utf-8");
    console.log(`Done! Output written to: ${OUTPUT_FILE}`);
}

main();
