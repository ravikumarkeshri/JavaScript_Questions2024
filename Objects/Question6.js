// Write a bubble sort algorithm in JavaScript.
// Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort_algo = function () {
    let is_Sorted = false;
    while (!is_Sorted) {
        is_Sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i + 1];
                this[i + 1] = this[i];
                this[i] = temp;
                is_Sorted = false;
            }
        }
    }
    return this;
}
const arr = [6, 4, 0, 3, -2, -1];
console.log(arr.bubbleSort_algo());