function sorting(arrNumber) {
    // code di sini
    let len = arrNumber.length, min;

    for (i=0; i < len; i++){

        min = i;

        for (j=i+1; j < len; j++){
            if (arrNumber[j] < arrNumber[min]){
                min = j;
            }
        }

        if (i != min){
            swap(arrNumber, i, min);
        }
    }

    return arrNumber;
}

function swap(items, firstIndex, secondIndex){
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
  
  function getTotal(arrNumber) {
    // code di sini
    let sorted = sorting(arrNumber);
    let largest = {};

    for (let i = 0; i < sorted.length; i++) {
        if (largest['name'] == null || Number(largest.name) < sorted[i]) {
            largest = {
                name: sorted[i],
                amount: 1
            }
        }
        else
            largest.amount++;
        
    }

    if (Object.keys(largest).length < 1) 
        return "''";
    else
        return `angka paling besar adalah ${largest.name} dan jumlah kemunculan sebanyak ${largest.amount} kali`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''