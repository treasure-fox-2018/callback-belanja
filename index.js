const beli = require('./beli.js')

class Barang{
    constructor(item, harga, waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}


let indomie = new Barang('indomie', 2500, 1000)
let roti = new Barang('roti', 3000, 1000)
let abon = new Barang('abon', 15000, 1000)
let sosis = new Barang('sosis', 5000, 1000)
let promag = new Barang('promag', 500, 1000)

beli(30000, indomie, function(kembalian){
    beli(kembalian, roti, function(kembalian){
        beli(kembalian, abon, function(kembalian){
            beli(kembalian, sosis, function(kembalian){
                beli(kembalian, promag, function(kembalian){
                    console.log(`sisa uang ${kembalian}, selesai deh belanja`)
                })
            })
        })
    })
})