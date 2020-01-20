function cariModus(arr) {
    // you can only write your code here!
    let res = {};

    for (let i = 0; i < arr.length; i++) {
        if (res[arr[i]] != null) {
            res[arr[i]] +=1;
        }else
            res[arr[i]] = 1;
    }
    

    let result =-1
    let counter=1
    for (let k in res) {

        if(res[k]==counter || Object.keys(res).length === 1){
            //
        }else if (res[k]>counter) {
            result=k
            counter=res[k]
        }

    }
    return result
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1