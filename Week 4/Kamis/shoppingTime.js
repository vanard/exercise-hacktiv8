function shoppingTime(memberId, money) {
    // you can only write your code here!
    if (memberId != null && memberId.length > 0) {
        if (money.length < 1 || money < 50000) {
            return "Mohon maaf, uang tidak cukup";
        }

        let item = {
            'Sepatu Stacattu':{
                harga: 1500000,
                jumlah: 1
            },
            'Baju Zoro':{
                harga: 500000,
                jumlah: 1
            },
            'Baju H&N': {
                harga: 250000,
                jumlah: 1
            },
            'Sweater Uniklooh': {
                harga: 175000,
                jumlah: 1
            },
            'Casing Handphone': {
                harga: 50000,
                jumlah: 1
            }
        }

        let purchase = [];
        let currentMoney = money;

        while(currentMoney >= 0) {
            if ((currentMoney - item['Sepatu Stacattu'].harga) >= 0 && item['Sepatu Stacattu'].jumlah === 1) {
                currentMoney -= item['Sepatu Stacattu'].harga;
                purchase.push('Sepatu Stacattu');
                item['Sepatu Stacattu'].jumlah = 0;
            }else if ((currentMoney - item['Baju Zoro'].harga) >= 0 && item['Baju Zoro'].jumlah === 1) {
                currentMoney -= item['Baju Zoro'].harga;
                purchase.push('Baju Zoro');
                item['Baju Zoro'].jumlah = 0;
            }else if ((currentMoney - item['Baju H&N'].harga) >= 0 && item['Baju H&N'].jumlah === 1) {
                currentMoney -= item['Baju H&N'].harga;
                purchase.push('Baju H&N');
                item['Baju H&N'].jumlah = 0;
            }else if ((currentMoney - item['Sweater Uniklooh'].harga) >= 0 && item['Sweater Uniklooh'].jumlah === 1) {
                currentMoney -= item['Sweater Uniklooh'].harga;
                purchase.push('Sweater Uniklooh');
                item['Sweater Uniklooh'].jumlah = 0;
            }else if ((currentMoney - item['Casing Handphone'].harga) >= 0 && item['Casing Handphone'].jumlah === 1) {
                currentMoney -= item['Casing Handphone'].harga;
                purchase.push('Casing Handphone');   
                item['Casing Handphone'].jumlah = 0;
            }else
                break
        }

        return {memberId: memberId, money: money, listPurchased: purchase, changeMoney: currentMoney};
    }
    else
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja