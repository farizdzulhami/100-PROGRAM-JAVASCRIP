const suku = document.getElementById('n')
const pertama = document.getElementById('a')
const rasio = document.getElementById('r')
const hitung = document.getElementById('hitung')

const labelHasil = document.getElementById('hasil')

hitung.addEventListener(
  "click", function(){
    let result = parseInt(pertama.value) * (parseInt(rasio.value)**parseInt(suku.value) - 1) / parseInt(rasio.value) - 1
    labelHasil.innerHTML = result
  }
)