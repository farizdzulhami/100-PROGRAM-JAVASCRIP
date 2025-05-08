const tinggiPrisma = document.getElementById('tp')
const luasAlas = document.getElementById('ls')
const tinggi = document.getElementById('t')
const alas = document.getElementById('alas')
const hitung = document.getElementById('hitung')

const luasPermukaan = document.getElementById('luasPermukaan')
const volume = document.getElementById('volume')

hitung.addEventListener(
  "click", function(){
    let result_luasPermukaan = parseInt(luasAlas.value) * 4
    let result_volume = (parseInt(alas.value) * parseInt(tinggi.value) * parseInt(tinggiPrisma.value)) / 6

    luasPermukaan.innerHTML = result_luasPermukaan + " cm<sup>2</sup>"
    volume.innerHTML = result_volume + " cm<sup>3</sup>"
  }
)