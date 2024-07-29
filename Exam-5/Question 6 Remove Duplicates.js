const Duplicates=()=>{
    var arr= [1, 2, 2, 3, 4, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is already in the uniqueArray
        if (uniqueArray.indexOf(arr[i]) === -1) {
            // If it's not, add it to the uniqueArray
            uniqueArray.push(arr[i]);
        }
    }
    

    console.log(arr);
}