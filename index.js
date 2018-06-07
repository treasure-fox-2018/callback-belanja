const beli = require("./beli");

let jajanan = [
  {
    item: "Permen",
    harga: 1500,
    waktu: 1000
  },
  {
    item: "Roti",
    harga: 7000,
    waktu: 800
  },
  {
    item: "Nasi Goreng",
    harga: 15000,
    waktu: 2000
  },
  {
    item: "Jus Alpukat",
    harga: 20000,
    waktu: 1500
  },
  {
    item: "Kopi Hitam",
    harga: 10000,
    waktu: 1000
  }
];




beli(100000, jajanan[0], function(kembalian) {
  beli(kembalian, jajanan[1], function(kembalian) {
    beli(kembalian, jajanan[2], function(kembalian) {
      beli(kembalian, jajanan[3], function(kembalian) {
        beli(kembalian, jajanan[4], function(kembalian) {
          console.log("selesai");
        });
      });
    });
  });
});
