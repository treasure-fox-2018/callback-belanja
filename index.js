const beli = require("./beli.js")
//
// function beli(uang, obj, cb){
//   console.log(`Saya pergi membeli ${obj.item}`)
//   setTimeout(function(){
//     let kembalian = uang - obj.harga
//     if (kembalian > 0) {
//       console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
//       cb(kembalian)
//     }else{
//       console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
//       cb(0)
//     }
//   }, obj.waktu);
// }
//
// module.exports = beli;

let shoppingList = [
                    {item: 'apple', harga: 50, waktu: 500},
                    {item: 'pear', harga: 40, waktu: 1000},
                    {item: 'banana', harga: 20, waktu: 2000},
                    {item: 'pen', harga: 15, waktu: 500},
                    {item: 'basketball', harga: 60, waktu: 1500},
                    ]

let uang = 200

// beli(uang, shoppingList[0], function(change) {
//
// })
//
// beli(uang, shoppingList[1], function(change) {
//
// })
beli(uang, shoppingList[0], function(change) {
  beli(change, shoppingList[1], function(change) {
    beli(change, shoppingList[2], function(change) {
      beli(change, shoppingList[3], function(change) {
        beli(change, shoppingList[4], function(change) {
        })
      })
    })
  })
})
