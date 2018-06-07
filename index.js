const beli = require('./beli.js')

var pensilObj = {
  item: 'pensil',
  harga: 9000,
  waktu: 1000,
}
var bukuObj = {
  item: 'buku',
  harga: 10000,
  waktu: 2500,
}
var penghapusObj = {
  item: 'penghapus',
  harga: 8000,
  waktu: 1500,
}
var pulpenObj = {
  item: 'pulpen',
  harga: 17000,
  waktu: 2000,
}
var kertasObj = {
  item: 'kertas',
  harga: 40000,
  waktu: 1500,
}
beli(50000, pensilObj, function(kembalian){
  beli(kembalian, bukuObj, function(kembalian){
    beli(kembalian, penghapusObj, function(kembalian){
      beli(kembalian, kertasObj, function(kembalian){
        beli(kembalian, pulpenObj, function(kembalian){
          console.log(`sisa uang ${kembalian}`);
        })
      })
    })
  })
})
// const beli = require('./beli.js')
//
// var pensilObj = {
//   item: 'pensil',
//   harga: 9000,
//   waktu: 1000,
// }
// var bukuObj = {
//   item: 'buku',
//   harga: 10000,
//   waktu: 2500,
// }
// var penghapusObj = {
//   item: 'penghapus',
//   harga: 8000,
//   waktu: 1500,
// }
// var pulpenObj = {
//   item: 'pulpen',
//   harga: 17000,
//   waktu: 2000,
// }
// var kertasObj = {
//   item: 'kertas',
//   harga: 40000,
//   waktu: 1500,
// }
// beli(50000, pensilObj, function(kembalian){
//   beli(kembalian, bukuObj, function(kembalian){
//     beli(kembalian, penghapusObj, function(kembalian){
//       beli(kembalian, pulpenObj, function(kembalian){
//         beli(kembalian, kertasObj, function(kembalian){
//         })
//       })
//     })
//   })
// })
