function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let dif = [];
    let judge = true;
    for (let i = 0; i < arr.length-1; i++) {
        dif.push(arr[i+1]/arr[i]);
    }

    // dif.forEach(it => {
    //     if (it !== dif[0]) {
    //         judge = false;
    //     }
    // });

    for (let i = 0; i < dif.length; i++) {
        if (dif[0] !== dif[i]) {
            judge = false;
            break;
        }
        
    }

    return judge;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false