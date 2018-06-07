
let beli = require('./beli.js')


class Chiki {
    constructor() {
        this.item = 'taro'
        this.harga = 7000
        this.waktu = 1000

    }

}

class Coklat {
    constructor() {
        this.item = 'yamyam'
        this.harga = 5000
        this.waktu = 1000

    }
}

class Permen {
    constructor() {
        this.item = 'milkita'
        this.harga = 2000
        this.waktu = 1000

    }

}

class Minum {
    constructor() {
        this.item = 'nutriSari'
        this.harga = 5000
        this.waktu = 1000
    }

}


class Biskuit {
    constructor() {
        this.item = 'regal'
        this.harga = 5000
        this.waktu = 1000

    }

}


let chiki = new Chiki()
let coklat = new Coklat()
let permen = new Permen()
let minum = new Minum()
let biskuit = new Biskuit()

let uang = 30000

beli(uang, chiki, function(value){
    beli(value, coklat, function(value){
        beli(value, permen, function(value){
            beli(value, minum, function(value){
                beli(value, biskuit, function(){
    
                })
            })
        })
    })    
})
