const beli = require('./beli.js')

var itemBelanja = [ {item: 'Pulpen', harga: 7000, waktu: 3000},
                {item: 'Pensil', harga: 4000, waktu: 2000},
                {item: 'Buku', harga: 8000, waktu: 4000},
                {item: 'Penggaris', harga: 5000, waktu: 1000},
                {item: 'Penghapus', harga: 3000, waktu: 5000} ]

var uang = 30000
beli(uang, itemBelanja[0], function(kembalian) {
    beli(kembalian, itemBelanja[1], function(kembalian) {
        beli(kembalian, itemBelanja[2], function(kembalian) {
            beli(kembalian, itemBelanja[3], function(kembalian) {
                beli(kembalian,itemBelanja[4], function(kembalian) {
                    console.log('Item sudah dibelanjakan semua')
                })
            })
        })
    })
})
