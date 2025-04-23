const phi = 3.14
const sisi = document.getElementById('sisi')
const hitung = document.getElementById('hitung')

const labelVolume = document.getElementById('Volume')
const labelluas = document.getElementById('luas')

hitung.addEventListener("click", function(){
  let Volume = parseInt(sisi.value) ** 3
  labelVolume.innerHTML = Volume + " cm<sup>3</sup>"

  let luas = 6 * parseInt(sisi.value) ** 2
  labelluas.innerHTML = luas + " cm<sup>2</sup>"
})