const suku_ke = document.getElementById('n')
const pertama = document.getElementById('a')
const selisih = document.getElementById('b')
const hitung = document.getElementById('hitung')

const labelHasil = document.getElementById('hasil')

hitung.addEventListener(
  "click", function(){
    let result = parseInt(a.value) + (parseInt(n.value)-1) * parseInt(b.value)
    labelHasil.innerHTML = result
  }
)