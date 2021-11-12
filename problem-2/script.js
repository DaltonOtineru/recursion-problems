function sumArray(arr){
    if(arr.length === 1){
        return arr[0];
    }
    else {
        return arr.pop() + sumArray(arr);
    }
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Returns 15