const phi = 3.14
const jari = document.getElementById('jari')
const hitung = document.getElementById('hitung')

const labelVolume = document.getElementById('Volume')
const labelluas = document.getElementById('luas')

hitung.addEventListener("click", function(){
  let Volume = 4/3 * phi * parseInt(jari.value) ** 3
  labelVolume.innerHTML = Volume + " cm<sup>3</sup>"

  let luas = 4 * phi * parseInt(jari.value) ** 2
  labelluas.innerHTML = luas + " cm<sup>2</sup>"
})