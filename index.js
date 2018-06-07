"use strict"
let beli = require('./beli.js')
class Object{
    constructor(item,harga,waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}
var ikan = new Object('Ikan',10000,500)
var ayam = new Object('Ayam',20000,1000)
var telur = new Object('Telur',5000,2000)
var indomie = new Object('Indomie',2000,1000)
var tahu = new Object('Tahu',500,1500) 

beli(10000,indomie,function(kembalian){
    beli(kembalian,telur,function(kembalian){
        beli(kembalian,ayam,function(kembalian){
            beli(kembalian,ikan,function(kembalian){
                beli(kembalian,tahu,function(kembalian){
                    console.log('Selesai belanjanya cooy')
                })
            })
        })
    })
})
