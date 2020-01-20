function fpb(angka1, angka2) {
    // you can only write your code here!
    // let fac1 = [];
    // let fac2 = [];
    // let fac3;
    // for (let i = 1; i <= angka1; i++) {
    //     if (angka1%i === 0) {
    //         fac1.push(i);
    //     }
    // }
    // for (let i = 1; i <= angka2; i++) {
    //     if (angka2%i === 0) {
    //         fac2.push(i);
    //     }
    // }
    

    // for (let i = 0; i < fac1.length; i++) {
    //     for (let j = 0; j < fac2.length; j++) {
    //         if (fac3 != null) {
    //             if (fac1[i] === fac2[j] && fac3 < fac1[i]) {
    //                 fac3 = fac1[i];
    //             }   
    //         }else
    //             fac3 = fac1[i];
            
    //     }
        
    // }

    // return fac3;

    let baseVal = 0;
    if (angka1 > angka2) 
        baseVal = angka2;
    else
        baseVal = angka1;

    let result = 0;

    for (let i = 1; i <= baseVal; i++) {
        if (angka1%i === 0 && angka2%i === 0 && result < i) {
            result = i;
        }      
    }

    return result;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1