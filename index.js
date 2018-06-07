let beli = require('./beli.js')
var obj = {
  item: 'somay',
  harga: 2000,
  waktu: 1000
}

beli(20000, obj, function(kembalian){
  console.log(kembalian)
  var itemObj = {
    item: 'Nasi Bungkus',
    harga: 7000,
    waktu: 1000
  }
  beli(kembalian, itemObj, function(kembalian){
    console.log(kembalian)
    var itemObj = {
      item: 'Permen Karet',
      harga: 3000,
      waktu: 1000
    }
    beli(kembalian, itemObj, function(kembalian){
      console.log(kembalian)
      var itemObj = {
        item: 'baju koko',
        harga: 2000,
        waktu: 1000
      }
      beli(kembalian, itemObj, function(kembalian){
        console.log(kembalian)
        var itemObj = {
          item: 'sepatu karpil',
          harga: 5000,
          waktu: 1000
        }
        beli(kembalian, itemObj, function(kembalian){
          console.log(kembalian)
          var itemObj = {
            item: 'sepatu karpil',
            harga: 5000,
            waktu: 1000
          }
          beli(kembalian, itemObj, function(kembalian){
            console.log(kembalian)
          })
        })
      })
    })
  })
})
