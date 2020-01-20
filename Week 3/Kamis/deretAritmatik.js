function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let dif = [];
    let judge = true;
    for (let i = 0; i < arr.length-1; i++) {
        dif.push(arr[i+1]-arr[i]); 
    }

    dif.forEach(it => {
        if (it !== dif[0]) {
            judge = false;
        }
    });

    return judge;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false