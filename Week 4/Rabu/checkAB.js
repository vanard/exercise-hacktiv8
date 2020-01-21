function checkAB(num) {
    // you can only write your code here!
    let item = {};
    let posA = [];
    let posB = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            posA.push(i);
        }else if (num[i] === 'b') {
            posB.push(i);
        }
        
    }

    item['A'] = posA;
    item['B'] = posB;

    if (item['A'].length < 1 || item['B'].length < 1) {
        item['judge'] = false;
    }
    
    for (let i = 0; i < item['A'].length; i++) {
        for (let j = 0; j < item['B'].length; j++) {
            if (Math.abs(item['A'][i] - item['B'][j]) === 4) {
                item['judge'] = true;
                break;
            }else if (Math.abs(item['A'][j] - item['B'][i]) === 4) {
                item['judge'] = true;
                break;
            }

            item['judge'] = false;
            
        }
    }

    return item['judge'];
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false