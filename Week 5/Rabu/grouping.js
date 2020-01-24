function meleeRangedGrouping (str) {
    //your code here

    if (str.length < 1) {
        return [];
    }

    const ranged = [];
    const meele = [];
    let heroes = "";
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ',') {
            if (temp === 'Ranged') 
                ranged.push(heroes);
            else 
                meele.push(heroes);
            
            heroes = "";
            temp = "";
        }
        else if (str[i] === '-') {
            heroes = temp;
            temp = "";
        }
        else if (i === str.length-1) {
            temp += str[i];
            if (temp === 'Ranged') 
                ranged.push(heroes);
            else 
                meele.push(heroes);
              
            heroes = "";
            temp = "";
        }
        else {
            temp += str[i];
            
        }
        
    }

    return [ranged,meele];
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []