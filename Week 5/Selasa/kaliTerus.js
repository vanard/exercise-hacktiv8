function kaliTerusRekursif(angka) {
    // you can only write your code here!

    if (angka.toString().length > 1) {
        let findDigit = angka.toString();
        let res = 1;
        for (let i = 0; i < findDigit.length; i++) {
    
            res *= Number(findDigit[i]);
            
        }
        return kaliTerusRekursif(res);
    }else 
        return angka;
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6