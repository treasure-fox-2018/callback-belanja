const beli = require('./beli.js');

var wafer = {
  item: "Wafer",
  harga: 15000,
  waktu: 5000
}

var permen = {
  item: "permen",
  harga: 2000,
  waktu: 1000
}

var haribo = {
  item: "haribo",
  harga: 200,
  waktu: 3000
}

var pepsi = {
  item: "pepsi",
  harga: 15000,
  waktu: 5000
}

var susu = {
  item: "susu",
  harga: 15000,
  waktu: 2000
}


beli(100000, wafer, function(getKembalian) {
  beli(getKembalian, susu, function(getKembalian) {
    beli(getKembalian, pepsi, function(getKembalian) {
      beli(getKembalian, haribo, function(getKembalian) {
        beli(getKembalian, permen, function(getKembalian) {
        })
      })
    })
  })
})
