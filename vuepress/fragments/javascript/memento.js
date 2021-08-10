// #region EditorMemento
class EditorMemento {
    constructor(content) {
        this._content = content;
    }

    getContent() {
        return this._content;
    }
}
// #endregion EditorMemento

// #region Editor
class Editor {
    constructor() {
        this._content = '';
    }

    type(words) {
        this._content = this._content + words;
    }

    getContent() {
        return this._content;
    }

    save() {
        return new EditorMemento(this._content);
    }

    restore(memento) {
        this._content = memento.getContent();
    }
}
// #endregion Editor

// #region useEditor
const editor = new Editor();

// 输入一些文本
editor.type('日月忽其不淹兮，');
editor.type('春与秋其代序。');

// 保存当前用于恢复的状态：日月忽其不淹兮，春与秋其代序。
const saved = editor.save();

// 再输入一些文本
editor.type('惟草木之零落兮，恐美人之迟暮。');

// 不保存，输出当前内容
console.log(editor.getContent()); // 日月忽其不淹兮，春与秋其代序。惟草木之零落兮，恐美人之迟暮。

// 恢复到上次保存的状态
editor.restore(saved);

console.log(editor.getContent()); // 日月忽其不淹兮，春与秋其代序。
// #endregion useEditor
