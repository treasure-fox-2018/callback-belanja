const beli = require('./beli.js')
let money = 100000

beli(money, {item: "Nasi Goreng", harga: 25000}, (kembalian) => {
  beli(kembalian, {item: "Siomay", harga: 10000}, (kembalian) => {
    beli(kembalian, {item: "Jus", harga: 5000}, (kembalian) => {
      beli(kembalian, {item: "Ayam Geprek", harga: 50000}, (kembalian) => {
        beli(kembalian, {item: "Es Kepal", harga: 75000}, (kembalian) => {
          console.log('kembalian:', kembalian)
        })
      })
    })
  })
})