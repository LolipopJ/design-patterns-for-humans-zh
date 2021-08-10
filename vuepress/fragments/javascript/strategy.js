// #region Sort
const bubbleSort = (dataset) => {
    console.log('使用冒泡排序');
    // ...
    // ...
    return dataset;
};

const quickSort = (dataset) => {
    console.log('使用快速排序');
    // ...
    // ...
    return dataset;
};
// #endregion Sort

// #region sorter
const sorter = (dataset) => {
    if (dataset.length > 5) {
        return quickSort;
    } else {
        return bubbleSort;
    }
};
// #endregion sorter

// #region useSorter
const longDataSet = [1, 5, 4, 3, 2, 8];
const shortDataSet = [1, 5, 4];

const sorter1 = sorter(longDataSet);
const sorter2 = sorter(shortDataSet);

sorter1(longDataSet); // Output : 使用快速排序
sorter2(shortDataSet); // Output : 使用冒泡排序
// #endregion useSorter
