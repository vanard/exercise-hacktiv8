// if-else
function proxytia(name, role) {
    let game = "";
    if (name.length < 1)
        return "Name must be fill."
    
    if (role.length < 1 && name.length > 0)
        return `Hello ${name}, Choose your role first to start the game.`;
    
    // switch(role){
    //     case "Ksatria":
    //         game = `Welcome to Proxytia World, ${name}\nHello Prince ${name}, you can attack using your weapon!`
    //         break;
    //     case "Tabib":
    //         game = `Welcome to Proxytia World, ${name}\nHello Physician ${name}, you will help your friends who is have a wound or an injury.`
    //         break;
    //     case "Penyihir":
    //         game = `Welcome to Proxytia World, ${name}\nHello Wizard ${name}, create miracle that can help your victory!`
    //         break;
    //     default:
    //         game = `Hello ${name}, Choose your role correctly to start the game.`;
    //         break;
    // }

    if (role == "ksatria")
        return `Welcome to Proxytia World, ${name}\nHello Prince ${name}, you can attack using your weapon!`;
    else if (role == "tabib")
        return `Welcome to Proxytia World, ${name}\nHello Physician ${name}, you will help your friends who is have a wound or an injury.`;
    else if (role == "penyihir")
        return `Welcome to Proxytia World, ${name}\nHello Wizard ${name}, create miracle that can help your victory!`;
    else
        return `Hello ${name}, Choose your role correctly to start the game.`;

    // return game;
}

console.log(proxytia('Roni', 'penyihir'));

// switch-case
function checkFormat (hari, bulan, tahun) {
    let month = "";
    switch (bulan) {
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Maret";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Mei";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Agustus";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "Desember";
            break;
    }

    return `${hari} ${month} ${tahun}`;
}

console.log(checkFormat(21, 1, 1945));