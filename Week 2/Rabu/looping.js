// 1. Looping While
var i = 2;

console.log('LOOPING PERTAMA');
while (i <= 20) {
    console.log(`${i} - I love coding`)
    i+=2;
}

i-=2;

console.log('LOOPING KEDUA');
while (i >= 2) {
    console.log(`${i} - I will become fullstack developer`)
    i-=2;
}

// 2. Looping For
console.log('LOOPING PERTAMA');
for (let i = 1; i <= 20 ; i++) {
    console.log(`${i} - I love coding`);
}
console.log('LOOPING KEDUA');
for (let i = 20; i >= 1 ; i--) {
    console.log(`${i} - I will become fullstack developer`);
}

// 3. Angka Ganjil dan Genap
function showGenapGanjil() {
    for (let i = 1; i <= 100; i++) {
        if ((i%2) == 0) {
            console.log("GANJIL");
        } else {
            console.log("GENAP");
        }
        
    }
}
// counter 2
function countTwo() {
    for (let i = 1; i <= 100; i+=2) {
        if ((i%3) == 0) {
            console.log(`${i} KELIPATAN 3`);
        } else {
            console.log("");
        }
        
    }
}
// counter 5
function countFive() {
    for (let i = 1; i <= 100; i+=5) {
        if ((i%6) == 0) {
            console.log(`${i} KELIPATAN 6`);
        } else {
            console.log("");
        }
        
    }
}
// counter 9
function countNine() {
    for (let i = 1; i <= 100; i+=9) {
        if ((i%10) == 0) {
            console.log(`${i} KELIPATAN 10`);
        } else {
            console.log("");
        }
        
    }
}

showGenapGanjil();
countTwo();
countFive();
countNine();