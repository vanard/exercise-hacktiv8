function urutkanAbjad(str) {
    // you can only write your code here!
    const data = [];
    const lowest = {};
    const 
    for (let i = 0; i < str.length-1; i++) {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
        data.push(str[i]);
        if (lowest.value != null && lowest.value > str[i]) {
            lowest.value = str[i];
            lowest.pos = i;
        }
        else if (str[i] > str[i+1]) {
            lowest.value = str[i+1];
            lowest.pos = i+1;
        } else {
            lowest.value = str[i];
            lowest.pos = i;
        }
        
    }

    return lowest.value;
  }
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'