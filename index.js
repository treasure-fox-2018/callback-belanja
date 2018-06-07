let beli = require('./beli.js')

var uang = 100000;
var obj1 = {item: 'Burger', harga: 50000, waktu: 150};
var obj2 = {item: 'Potato', harga: 15000, waktu: 200};
var obj3 = {item: 'Hot Dog', harga: 20000, waktu: 300};
var obj4 = {item: 'Cola', harga: 10000, waktu: 300};
var obj5 = {item: 'Ice Cream', harga: 15000, waktu: 50};

  beli(uang, obj1, function(kembalian) {
    uang = kembalian;
    beli(uang, obj2, function(kembalian) {
      uang = kembalian;
      beli(uang, obj3, function(kembalian) {
        uang = kembalian;
        beli(uang, obj4, function(kembalian) {
          uang = kembalian;
          beli(uang, obj5, function(kembalian) {
            uang = kembalian;
          });
        });
      });
    });
  });

// NOTE
// di file beli.js line 9 yg awalnya kembalian cuma ${kembalian}, saya gnti ke ${uang} biar nggak minus
