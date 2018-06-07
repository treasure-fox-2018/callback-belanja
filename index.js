let beli = require("./beli.js")

//create class barang
class Barang {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

//create objects barang
let permen = new Barang ("permen", 500, 2000);
let roti = new Barang ("roti", 1000, 2000);
let nasi = new Barang ("nasi", 5000, 2000);
let esTeh = new Barang ("es teh", 2000, 2000);
let gorengan = new Barang ("gorengan", 1500, 2000);

// let listBelanja = [permen, roti, nasi, esTeh, gorengan]

let index= 0;
beli(2000, permen, function (kembalian) {
  if (kembalian <=0 ) {
    return
  }
  beli (kembalian, roti, function(kembalian) {
    if (kembalian <=0) {
      return
    }
    beli (kembalian, nasi, function (kembalian) {
      if (kembalian <=0) {
        return
      }
      beli (kembalian, esTeh, function (kembalian) {
        if (kembalian <=0) {
          return
        }
        beli (kembalian, gorengan, function (kembalian) {
          if (kembalian <= 0) {
            return
          } 
        })
      })
    })
  })
})