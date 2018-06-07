const beli = require('./beli');

beli(50000, {item : 'pisau' , harga: 30000 , waktu : 4000}, function(kembalian){
    beli(kembalian, {item : 'sabun' , harga: 30000 , waktu : 2000}, function(kembalian){
        beli(kembalian, {item : 'nasi padang' , harga: 35000 , waktu : 3000}, function(kemblian){
            beli(kembalian, {item : 'pizza' , harga: 30000 , waktu : 1000}, function(kembalian){
               beli(kembalian, {item : 'mie ayam' , harga: 30000 , waktu : 4000}, function(kembalian){

               }) 
            })
        })
    })

})