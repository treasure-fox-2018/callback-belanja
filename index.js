let beli = require('./beli.js')


let saldo = 500000

let Sepatu = {
  item: 'Adidas',
  harga: 30000,
  waktu: 1000
}

let Buku = {
  item: 'Magic',
  harga: 1000,
  waktu: 1000
}

let laptop = {
  item: 'Mac',
  harga: 35000,
  waktu: 2000
}

let Snack = {
  item: 'Choco Chips',
  harga: 100000,
  waktu: 1300
}



beli(saldo, Sepatu, sisa => {
  beli(sisa, Buku, sisa => {
    beli(sisa, laptop, sisa => {
      beli(sisa, Snack, sisa => {



      })
    })
  })
})
