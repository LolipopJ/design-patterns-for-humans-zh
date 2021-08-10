// #region inputCase
const upperCase = (inputString) => inputString.toUpperCase();
const lowerCase = (inputString) => inputString.toLowerCase();
const defaultTransform = (inputString) => inputString;
// #endregion inputCase

// #region TextEditor
class TextEditor {
    constructor(transform) {
        this._transform = transform;
    }

    setTransform(transform) {
        this._transform = transform;
    }

    type(words) {
        console.log(this._transform(words));
    }
}
// #endregion TextEditor

// #region useTextEditor
const editor = new TextEditor(defaultTransform);

editor.type('First line');

editor.setTransform(upperCase);

editor.type('Second line');
editor.type('Third line');

editor.setTransform(lowerCase);

editor.type('Fourth line');
editor.type('Fifth line');

// 输出：
// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line
// #endregion useTextEditor
