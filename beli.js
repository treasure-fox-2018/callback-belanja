function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} uangnya cuman ${uang} harganya ${obj.harga} kembaliannya jadi ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

module.exports = beli;
