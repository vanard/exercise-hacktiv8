function palindrome(kata) {
    // you can only write your code here!
    const kataDibalik = kata.split("").reverse().join("");
    if (kataDibalik === kata) {
        return true;
    }else
        return false;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false