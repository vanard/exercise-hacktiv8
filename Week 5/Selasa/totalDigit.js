function totalDigitRekursif(angka) {
    // you can only write your code here!
    // let res = 0;
    // for (let i = 0; i < angka.toString().length; i++) {
    //     res += Number(angka.toString()[i]);
        
    // }  

    if (Math.floor(angka/10) === 0) {
        return angka
    }else
        return angka%10 + totalDigitRekursif(Math.floor(angka/10));
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5