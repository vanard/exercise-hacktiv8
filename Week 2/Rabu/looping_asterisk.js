// baris bintang 1
function barisBintang (num) {
    var rows1 = num;

    for (let i = 0; i < rows1; i++) {
        console.log("*");
    }
}

// barisBintang(5);

// baris bintang nested
function barisBintang2 (num) {
    var rows1 = num;

    for (let i = 0; i < rows1; i++) {
        var bintang = "";
        for (let j = 0; j < rows1; j++) {
            bintang += "*";
            
        }
        console.log(bintang);
    }
}

// barisBintang2(5);

// baris bintang tangga nested
function barisBintang3 (num) {
    var rows1 = num;

    for (let i = 0; i < rows1; i++) {
        var bintang = "";
        for (let j = 0; j < i+1; j++) {
            bintang += "*";
            
        }
        console.log(bintang);
    }
}

barisBintang3(5);