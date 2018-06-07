const beli = require('./beli.js')

beli(100000, {item: 'permen', harga: 1000, waktu: 20}, function(kembalian) {
  beli(kembalian, {item: 'batagor', harga: 30000, waktu: 30}, function(kembalian) {
    beli(kembalian, {item: 'bakso', harga: 30000, waktu: 40}, function(kembalian) {
      beli(kembalian, {item: 'pecel', harga: 30000, waktu: 50}, function(kembalian) {
        beli(kembalian, {item: 'es teh', harga: 20000, waktu: 10}, function(kembalian) {});
      });
    });
  });
});
