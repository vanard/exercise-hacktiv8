function ubahHuruf(kata) {
    // you can only write your code here!
    //
    let ubah = "";
    // for (let i = 0; i < kata.length; i++) {
    //     ubah += String.fromCharCode(kata.charCodeAt(i) + 1)
        
        
    // }

    //
    const abjad = ['a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < kata.length; i++) {
        ubah += abjad[(abjad.indexOf(kata[i])) + 1];
        
    }

    return ubah;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu