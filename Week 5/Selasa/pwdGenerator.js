function changeVocals (str) {
    //code di sini
    let res = "";
    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a':
                res += 'b'
                break;
            case 'i':
                res += 'j'
                break;
            case 'u':
                res += 'v'
                break;
            case 'e':
                res += 'f'
                break;
            case 'o':
                res += 'p'
                break;
            case 'A':
                res += 'B'
                break;
            case 'I':
                res += 'J'
                break;
            case 'U':
                res += 'V'
                break;
            case 'E':
                res += 'F'
                break;
            case 'O':
                res += 'P'
                break;
            default:
                res += str[i];
                break;
        }
        
    }

    return res;
  }
  
  function reverseWord (str) {
      let res = "";
    for (let i = str.length-1; i  >= 0; i--) {
        res += str[i];
        
    }
    return res;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let change = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== ' ') {
            change += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase() && str[i] !== ' ') {
            change += str[i].toUpperCase();
        } else {
            change += (' ');
        }
        
    }

    return change;

  }
  
  function removeSpaces (str) {
    //code di sini
    let removeSpc = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') 
            removeSpc += ('');
        else 
            removeSpc += str[i];
    }

    return removeSpc;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length > 4) {
        return `'${changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))}'`;
    }else
        return "'Minimal karakter yang diinputkan adalah 5 karakter'";
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'