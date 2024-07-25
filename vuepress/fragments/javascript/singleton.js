// #region president
const president = (function () {
    const presidentsPrivateInformation = "Super private";

    const name = "Turd Sandwich";

    const getName = () => name;

    return {
        getName,
    };
})();
// #endregion president

// #region getPresidentName
president.getName(); // 输出：'Turd Sandwich'
president.name; // 输出：undefined
president.presidentsPrivateInformation; // 输出：undefined
// #endregion getPresidentName
