// #region Webpage
/**
 * Webpage interface :
 *
 * constructor(theme)
 * getContent()
 */

class About {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "About page in " + this.theme.getColor();
    }
}

class Careers {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "Careers page in " + this.theme.getColor();
    }
}
// #endregion Webpage

// #region Theme
/**
 * Theme interface :
 *
 * getColor()
 */

class DarkTheme {
    getColor() {
        return "Dark Black";
    }
}
class LightTheme {
    getColor() {
        return "Off white";
    }
}
class AquaTheme {
    getColor() {
        return "Light blue";
    }
}
// #endregion Theme

// #region useTheme
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
// #endregion useTheme
