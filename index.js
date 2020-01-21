//(Function timeToWords accept an input of strings that is a Time.) (This function have job to change time to a sentence.)
/*
* Convert time to words
* Function timeToWords menerima input berupa string yang merupakan sebuah waktu. 
* Function ini berfungsi merubah waktu menjadi sebuah kalimat.
*
* EXAMPLE 1 ------------------------
* Input: 
* '05:30'
* 
* Output:
* 'Jam setengah 6'
*
* EXAMPLE 2 ------------------------
* Input: 
* '03:10'
* 
* Output:
* 'Jam 3 lebih 10 menit'
*
* EXAMPLE 3 ------------------------
* Input: 
* '07:40'
* 
* Output:
* 'Jam 8 kurang 20 menit'
*
* RULES:
* - TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
*/

function timeToWords(waktu) {
    //Your code here
    let time = {};
    let hour = "";
    let minute = "";
    let separator = false;
    let res = "";

    for (let i = 0; i < waktu.length; i++) {
        if (waktu[i] === ':') {
            separator = true;
        }else if (separator) {
            minute += waktu[i];
        }else 
            hour += waktu[i];
        
    }

    time.hour = hour;
    time.minute = minute;

    if (Number(time.minute) > 30) {
        res = "Jam " + (Number(time.hour) + 1) + " kurang " + (60 - Number(time.minute) + " menit");
    }else if (Number(time.minute) === 30) {
        res = "Jam setengah " + (Number(time.hour) + 1);

    } else if (Number(time.minute) > 0 && Number(time.minute) < 30) {
        res = "Jam " + Number(time.hour) + " lebih " + Number(time.minute) + " menit";
    } else
        res = "Jam " + Number(time.hour);

    return res;
}

console.log(timeToWords('10:10')); // Jam 10 lebih 10 menit
console.log(timeToWords('01:30')); // Jam setengah 2
console.log(timeToWords('09:47')); // Jam 10 kurang 13 menit
console.log(timeToWords('11:00')); // Jam 11
