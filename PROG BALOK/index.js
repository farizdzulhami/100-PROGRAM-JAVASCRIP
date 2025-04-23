const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')

const labelVolume = document.getElementById('Volume')
const labelluas = document.getElementById('luas')

hitung.addEventListener("click", function(){
  let Volume = parseInt(panjang.value) * parseInt(lebar.value) * parseInt(tinggi.value)
  labelVolume.innerHTML = Volume + " cm<sup>3</sup>"

  let luas = 2 * (parseInt(panjang.value) * parseInt(lebar.value) + parseInt(panjang.value) * parseInt(tinggi.value) + parseInt(lebar.value) * parseInt(tinggi.value))
  labelluas.innerHTML = luas + " cm<sup>2</sup>"
})