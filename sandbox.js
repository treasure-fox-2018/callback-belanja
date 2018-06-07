function nasiBungkus (number, namaGojek, callback) {
  setTimeout(function() {
    console.log('Beli nasi bungkus')
    console.log('Nasi bungkus sudah dibeli')
    let totalBungkusan = 120
    callback(totalBungkusan, 'Garuda')
  }, 4000)
}

function pudding () {
  setTimeout(function () {
    console.log('Beli Pudding')
    console.log('Pudding sudah dibeli')
  }, 3000)
}

function cola () {
  setTimeout(function () {
    console.log('Beli Cola')
    console.log('Cola sudah dibeli')
  }, 2000)
}

function hitungNasiBungkus () {
  setTimeout(function () {
    console.log('Nasi bungkus sudah dihitung')
  }, 1000)
}

nasiBungkus(10, 'Ari', function(getTotalNasi, namaResto) {
  console.log('Nama resto:', namaResto)
  console.log('Total Nasi:', getTotalNasi)
  hitungNasiBungkus()
})
pudding()
cola()
