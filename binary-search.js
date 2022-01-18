function binarySearch(array, num) {
    let low = 0
    let high = array.length - 1


    while (low <= high) {
        let mid = low + high
        console.log('mid', mid)
        let guess = array[mid]
        if (guess === num) return mid
        if (guess > num) {
            high = mid - 1
        } else  {
            low = mid + 1
        }
    }
}


const array = [1, 3, 5, 7, 9]

console.log(binarySearch(array, 9));
