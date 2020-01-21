function urutkanAbjad(str) {
    // you can only write your code here!
    let temp = [];
    for (let i = 0; i < str.length; i++) {
        temp.push(str[i]);
        
    }

    temp = selSort(temp);
    let result = "";

    for (let i = 0; i < temp.length; i++) {
        result += temp[i];
        
    }
    return result;
  }
  
  function selSort(items) {
    let len = items.length, min;

    for (i=0; i < len; i++){

        min = i;

        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}

function swap(items, firstIndex, secondIndex){
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'