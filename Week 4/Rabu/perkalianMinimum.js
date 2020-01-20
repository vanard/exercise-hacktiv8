function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    const fac = [];
    for (let i = 1; i <= angka; i++) {
        if (angka%i === 0) {
            fac.push(i);
        }    
    }


    let digitMinim;
    for (let i = 0; i < fac.length/2; i++) {
        for (let j = 0; j < fac.length; j++) {
            if ((fac[i]*fac[j]) === angka) {
                var digit = `${fac[i]}${fac[j]}`
                // console.log(`${fac[i]}*${fac[j]}`)
                if (digitMinim != null) {
                    if (digitMinim > digit.length) {
                        digitMinim = digit.length;
                    }
                }else
                    digitMinim = digit.length;
            }
            
        }
        
    }

    return digitMinim;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2