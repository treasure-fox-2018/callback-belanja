const beli = require ('./beli.js')

function belanja (money, item) {

    beli(money, item[0], function(kembalian) {
        
        beli(kembalian, item[1], function(kembalian) {
            
            beli(kembalian, item[2], function(kembalian) {

                beli(kembalian, item[3], function(kembalian) {

                    beli(kembalian, item[4], function(kembalian) {

                    })
                })
            })
        })
    })

}

let startingMoney = 20000
let item = 
[
    {
        item : 'pencil',
        harga : 2000,
        waktu : 1000
    },
    {
        item : 'crayon',
        harga : 4000,
        waktu : 2000
    },
    {
        item : 'eraser',
        harga : 3000,
        waktu : 3000
    },
    {
        item : 'pen',
        harga : 2500,
        waktu : 1500
    },
    {
        item : 'sketch book',
        harga : 5000,
        waktu : 3500
    }
]

belanja (startingMoney, item)