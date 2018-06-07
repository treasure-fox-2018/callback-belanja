const beli = require ('./beli.js')

var jajanan = [ {item: 'Nasgor', harga: 20000, waktu: 1000}, 
                {item: 'Aqua', harga: 5000, waktu: 500},
                {item: 'Sampoerna Mild', harga: 20000, waktu: 500},
                {item: 'Bakwan', harga: 2000, waktu: 2000},
                {item: 'Teh Tarik', harga: 3000, waktu: 300} ]

beli(50000, jajanan[0], function(kembalian) {
    beli(kembalian, jajanan[1], function(kembalian) {
        beli(kembalian, jajanan[2], function(kembalian) {
            beli(kembalian, jajanan[3], function(kembalian) {
                beli(kembalian,jajanan[4], function(kembalian) {
                    console.log('done belanja gw udah bokek')
                })
            })
        })
    })
})    
