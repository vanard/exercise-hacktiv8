// 1. Newton Second Law
function hNewton(m, a) {
    return m*a;
}

console.log(hNewton(600, 2));

/* pseudocode
    algoritm Newton Second Law
    READ m and a
    COMPUTE m times a
    SHOW the computation result
*/


// 2. Tahun Kabisat
function kabisatYear(num) {
    let result = false;

    if ( ((num%4) == 0 && (num%100) != 0) ||
     ((num%4) == 0 && (num%100) == 0 && (num%400) == 0) )
        result = true;

    return result;
}

console.log(kabisatYear(1996))

/* pseudocode
    algoritm Tahun Kabisat
    READ numberOfYear
    IF numberOfYear habis dibagi 4 dan tidak habis dibagi 100, atau 
    numberOfYear habis dibagi 4 dan habis dibagi 100 dan habis dibagi 400
    THEN SAVE true
    SHOW result
*/

// 3. Laundry Day
function laundry(clothes) {

}

/* pseudocode
    algoritm Laundry Day
    READ and SAVE clothes
    FOR tiap cucian yang akan dimasukkan
    INCREMENT cucian
    END FOR
    IF cucian sama dengan jumlah cucian yang masuk THEN
    SHOW mesin cuci menyala
    ELSE
    SHOW mesin masih belum menyala

*/


// 4. Periksa Kuku
function checkNails() {
    
}

/* pseudocode
    algoritm Periksa KUKU
    FOR tiap siswa didalam kelas
    IF siswa memiliki kuku panjang
    THEN SHOW Guru akan menghukum siswa
    ELSE Show Guru akan memuji siswa
    END FOR
*/

