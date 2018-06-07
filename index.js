const beli = require('./beli.js')

class Belanja{
    constructor(item,harga,waktu){
        this._item = item
        this._harga = harga
        this._waktu = waktu
    }

    get item(){
        return this._item
    }

    get harga(){
        return this._harga
    }

    get waktu(){
        return this._waktu
    }
}

var permen = new Belanja('permen',2000,2000) //ms
var roti = new Belanja('roti',5000,2000)
var cola = new Belanja('cola',4000,2000)
var aqua = new Belanja('aqua',5000,2000)
var kue = new Belanja('kue',3000,2000)

beli(14000,permen,function (kembalian) {

    beli(kembalian,roti,function (kembalian) {
        if (kembalian <= 0) {
            return 0
        }
        beli(kembalian,cola,function (kembalian) {
            if (kembalian <= 0) {
                return 0
            }
            beli(kembalian,aqua,function (kembalian) {
                if (kembalian <= 0) {
                    return 0
                }
                beli(kembalian,kue,function (kembalian) {
                    if (kembalian <= 0) {
                        return 0
                    }
                })
            })
        })
    })    
})


