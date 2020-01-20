function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    let res = [];
    let temp = [];
    for (let i = 0; i < animals.length; i++) {
        if (temp.length === 0 || check(animals[i], temp[0])) {
            temp.push(animals[i]);
        }else {
            res.push(temp);
            temp = [animals[i]];
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
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]