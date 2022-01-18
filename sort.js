const array = [1, 42, 10, 4, 11, 3, 5, 7, 9]

function findMin(array) {
    let smallestElement = array[0];
    let smallestElementIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestElementIndex = i;
        }
    }
    return {
        smallestElement: smallestElement,
        smallestElementIndex: smallestElementIndex,
    }
}

console.log(findMin(array))
