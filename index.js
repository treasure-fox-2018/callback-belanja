let proses = require ('./beli.js')

function belanja() {
  var barang = [{
    item: 'sushi',
    harga: 20000,
    waktu: 2000
  },{
    item: 'gorengan',
    harga: 10000,
    waktu: 2000
  },{
    item: 'softdrink',
    harga: 8000,
    waktu: 2000
  },{
    item: 'rujak',
    harga: 3000,
    waktu: 2000
  },{
    item: 'nasigoreng',
    harga: 10000,
    waktu: 2000
  }]

  proses(60000,barang[0],function(kembalian){
    proses(kembalian,barang[1],function(kembalian){
      proses(kembalian,barang[2],function(kembalian){
        proses(kembalian,barang[3],function(kembalian){
          proses(kembalian,barang[4],function(kembalian){
          })
        })
      })
    })
  })
}
console.log(belanja());
