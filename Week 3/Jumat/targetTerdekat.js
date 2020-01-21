function targetTerdekat(arr) {
    // you can only write your code here!
    let posChar = 0;
    const posTarget = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posChar = i;
        }
        if (arr[i] === 'x') {
            posTarget.push(i);
        }
    }

    let dif;
    // posTarget.forEach(it => {
    //     const calculate = Math.abs(it - posChar);
    //     if (dif != null) {
    //         if (dif > calculate) {
    //             dif = calculate;
    //         }
    //     }else
    //         dif = calculate;
    // });

    for (let i = 0; i < posTarget.length; i++) {
        const calculate = Math.abs(posTarget[i] - posChar);
        if (dif != null) {
            if (dif > calculate) {
                dif = calculate;
            }
        }else
            dif = calculate;
    }

    if (dif != null) {
        return dif;        
    }else
        return 0;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2