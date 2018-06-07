// import { log } from 'util';

const beli = require('./beli.js')

// var obj = {
//     item : 'permen',
//     harga : 500,
//     waktu : 5000
// }

// beli(5000, obj, function(){

// });


var permen = {item : 'permen', harga : 500, waktu : 5000}
var mie = {item : 'mie', harga : 2500, waktu : 1000}
var gorengan = {item : 'gorengan', harga : 1000, waktu : 3000}
var teh = {item : 'teh sisri', harga : 2000, waktu : 2000}
var pulpen = {item : 'pulpen', harga : 2500, waktu : 4000}
                
beli(5000, permen, function(kembalian){
    beli(kembalian, mie, function(kembalian){
        beli(kembalian, gorengan, function(kembalian){
            beli(kembalian, teh, function(kembalian){
                beli(kembalian, pulpen, function(kembalian){
                })
            })
        })
    })
})


