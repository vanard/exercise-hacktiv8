function groupAnimals(animals) {
    // you can only write your code here!
    const sorted = selSort(animals);
    let res = [];
    let temp = [];
    for (let i = 0; i < sorted.length; i++) {
        if (temp.length === 0 || check(sorted[i], temp[0])) {
            temp.push(sorted[i]);
        }else {
            res.push(temp);
            temp = [sorted[i]];
        }
    }

    res.push(temp)

    return res;
}

function check(first, second) {
    if (second != null) {
    return first[0] === second[0];   
    }     
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
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]