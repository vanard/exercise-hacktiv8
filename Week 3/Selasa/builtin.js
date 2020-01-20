var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

 function dataHandling2(data) {
     data.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
     data.splice(4,1, "Pria", "SMA Internasional Metro");
     console.log(data);
     let month = data[3];
     let formatDate = month.split("/"); 
     const sortMonth = month.split("/").sort(function(a, b){return b-a});
     month = month.split("/")[1];
     switch(month) {
        case '01':
             month = "Januari";
             break;
        case '02':
             month = "Februari";
             break;
        case '03':
             month = "Maret";
             break;
        case '04':
             month = "April";
             break;
        case '05':
             month = "Mei";
             break;
        case '06':
             month = "Juni";
             break;
        case '07':
             month = "Juli";
             break;
        case '08':
             month = "Agustus";
             break;
        case '09':
             month = "September";
             break;
        case '10':
             month = "Oktober";
             break;
        case '11':
             month = "November";
             break;
        case '12':
             month = "Desember";
             break;
     }
     console.log(month);
     console.log(sortMonth);
     console.log(formatDate.join("-"));
     console.log(data[1].slice (0,15));
     
 }