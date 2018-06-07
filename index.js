const beli = require('./beli.js')

let saldo = 100000

let daging = {"item" : "daging", "harga": 50000, "waktu": 4000}
let beras = {"item" : "beras", "harga": 10000, "waktu": 1000}
let minyak = {"item" : "minyak", "harga": 8000, "waktu": 2000}
let sayur = {"item" : "sayur", "harga": 5000, "waktu": 1000}
let buah = {"item" : "buah", "harga": 20000, "waktu": 3000}

function hitungSaldo (kembalian) {
    saldo = saldo - kembalian
}

beli(saldo, minyak, function(kembalian) {
  beli(kembalian, sayur, function(kembalian) {
    beli(kembalian, daging, function(kembalian) {
      beli(kembalian, buah, function(kembalian) {
        beli(kembalian, beras, function(kembalian) {
            hitungSaldo(kembalian)
        })
      })
    })
  })
})
