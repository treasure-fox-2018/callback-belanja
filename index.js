'use strict'
let beli = require('./beli.js')

let jajanPermen = {
    item: 'Permen',
    harga: 3000,
    waktu: 2000
}

let jajanRoti = {
    item: 'Roti',
    harga: 7000,
    waktu: 000
}

let jajanSusu = {
    item: 'Susu',
    harga: 7000,
    waktu: 4000
}

let beliGarem = {
    item: 'Garem',
    harga: 2000,
    waktu: 2000
}

let beliTerigu = {
    item: 'Terigu',
    harga: 5000,
    waktu: 2000
}

beli(15000, jajanPermen, function(kembalian){
    beli(kembalian, jajanRoti,function(kembalian){
        beli(kembalian, jajanSusu, function(kembalian){
            beli(kembalian, beliGarem, function(kembalian){
                beli(kembalian,beliTerigu,function(kembalian){
                    beli(kembalian,beliGarem,function(kembalian){

                    })
                })
            })
        })
    })
})