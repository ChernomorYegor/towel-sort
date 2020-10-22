module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            (i + 1) % 2 ? result = result.concat(matrix[i]) : result = result.concat(matrix[i].reverse());
        }
    }

    return result;
}
