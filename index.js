var beli = require('./beli.js')

var uang = 100000;

var objArr = [
  {
    item : 'Steak',
    harga : 30000,
    waktu : 10000
  },
  {
    item : 'Indomie Goreng Dobel',
    harga : 14000,
    waktu : 5000
  },
  {
    item : 'Jus Apel',
    harga : 14000,
    waktu : 15000
  },
  {
    item : 'Tiket Nonton Film',
    harga : 25000,
    waktu : 8000
  },
  {
    item : 'Nu Milk Tea 3',
    harga : 18000,
    waktu : 10000
  },
]

beli (uang, objArr[0], function(kembalian){
  beli(kembalian, objArr[1], function(kembalian){
    beli(kembalian, objArr[2], function(kembalian){
      beli(kembalian, objArr[3], function(kembalian){
        beli(kembalian, objArr[4], function(kembalian){
    
        })
      })
    })
  })  
}) 