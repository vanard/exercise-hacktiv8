function urutkanAbjad(str) {
    // you can only write your code here!
    const abjad = ['a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const abjadIndex = [];
    for (let i = 0; i < str.length; i++) {
        abjadIndex.push(abjad.indexOf(str[i]));
        
    }
    abjadIndex.sort(function(a, b){return a-b});

    const res = [];
    for (let i = 0; i < abjadIndex.length; i++) {
         res.push(abjad[abjadIndex[i]]);
        
    }
    return res.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'