const beli = require("./beli.js");

// function beli(uang, obj, cb){
//     console.log(`Saya pergi membeli ${obj.item}`)
//     setTimeout(function(){
//       let kembalian = uang - obj.harga
//       if (kembalian > 0) {
//         console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
//         cb(kembalian)
//       }else{
//         console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
//         cb(0)
//       }
//     }, obj.waktu);
//   }


let shoppingList= [ {item : "chicken", harga : 500, waktu : 2000},
                    {item : "beef", harga : 600, waktu : 2000},
                    {item : "pork", harga : 300, waktu : 2000},
                    {item : "lamb", harga : 700, waktu : 2000},
                    {item : "turkey", harga : 9000, waktu : 2000}]

beli(2500,shoppingList[0],(kembalian)=>{
    beli(kembalian,shoppingList[1],(kembalian) =>{
        beli(kembalian,shoppingList[2],(kembalian) =>{
            beli(kembalian,shoppingList[3],(kembalian)=>{
                beli(kembalian,shoppingList[4],(kembalian)=>{
                    setTimeout(function(){
                        console.log(`time to go home`)
                    },2000)
                })
            })
            // console.log(`slesai uang kembalian adalah`)
        })
    })
})