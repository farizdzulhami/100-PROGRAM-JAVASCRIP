const Jarijari = document.getElementById('r')
const miring = document.getElementById('s')
const tinggi = document.getElementById('t')
const PHI = 3.14
const hitung = document.getElementById('hitung')

const selimut = document.getElementById('selimut')
const permukaan = document.getElementById('permukaan')
const volume = document.getElementById('volume')

hitung.addEventListener(
  "click", function(){
    let result_selimut = PHI * parseInt(Jarijari.value) * parseInt(miring.value)
    let result_permukaan = (PHI * parseInt(Jarijari.value) * parseInt(miring.value)) + (PHI * parseInt(Jarijari.value)**2)
    let result_volume = 1/3 * PHI * parseInt(Jarijari.value)**2 * parseInt(tinggi.value)

    selimut.innerHTML = result_selimut
    permukaan.innerHTML = result_permukaan
    volume.innerHTML = result_volume
  }
)