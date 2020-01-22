function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    const res = [];
    
    for (let i = 0; i < arrPenumpang.length; i++) {

        let start = 0;
        let end = 0;

        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                start = j;
            }
            if (rute[j] === arrPenumpang[i][2]) {
                end = j;
            }
            
        }

        res.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (end-start) * 2000
        })
        
    }

    return res;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]