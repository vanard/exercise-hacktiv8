//input "hello world!"
//output
// "!dlrow olleh"

const str = 'hello world!';
function balikString(str) {
    let balik = "";
    for (let i = str.length-1; i >= 0; i--) {
        // console.log(i);
        balik += str[i];
        
    }

    return balik;
}

console.log(balikString(str));