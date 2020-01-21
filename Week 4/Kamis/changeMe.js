function changeMe(arr) {
  // you can only write your code here!
  const today = new Date().getFullYear();
  console.log(today);
  let res = {};
  let age = 0;
  
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][3] != null) 
            age = today - arr[i][3];
        else
            age = 'Invalid Birth Year';
            

        res[`${i+1}. ${arr[i][0]} ${arr[i][1]}`] = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: age
        }
        
    }

    console.log(res);
  }else
    console.log('""');
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""