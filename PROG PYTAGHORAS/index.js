const phi = 3.14
const a = document.getElementById('a')
const b = document.getElementById('b')
const hitung = document.getElementById('hitung')

const labelHasil = document.getElementById('Hasil')
const labelluas = document.getElementById('luas')

hitung.addEventListener("click", function(){
  let c = parseInt(a.value)**2 + parseInt(b.value)**2

  let Hasil = c**0.5
  labelHasil.innerHTML = Hasil
})