function angkaPalindrome(num) {
    // you can only write your code here!
    if (num.toString().length === 1 && num < 9) {
        return num+1;
    }else {
        while(reverse(num) != num) {
            num++;
        }

        return num;
        
    }
  }

  function reverse(str) {
      let stonk = ""+str;
      let word = "";
    for (let i = stonk.length-1; i >= 0; i--) {
        word += stonk[i];
        
    }

    return word;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001