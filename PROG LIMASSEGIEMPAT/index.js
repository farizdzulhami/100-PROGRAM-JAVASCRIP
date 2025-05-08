const luasSisi = document.getElementById('ls')
const luasAlas = document.getElementById('la')
const tinggi = document.getElementById('t')
const hitung = document.getElementById('hitung')

const luasPermukaan = document.getElementById('luasPermukaan')
const volume = document.getElementById('volume')

hitung.addEventListener(
  "click", function(){
    let result_luasPermukaan = parseInt(luasSisi.value) * 5
    let result_volume = 1/3 * parseInt(luasAlas.value) * parseInt(tinggi.value)

    luasPermukaan.innerHTML = result_luasPermukaan + " cm<sup>2</sup>"
    volume.innerHTML = result_volume + " cm<sup>3</sup>"
  }
)