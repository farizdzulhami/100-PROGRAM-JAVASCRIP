const phi = 3.14
const alas = document.getElementById('alas')
const tinggi = document.getElementById('Tinggi')
const hitung = document.getElementById('hitung')

const labelKeliling = document.getElementById('Keliling')
const labelluas = document.getElementById('luas')

hitung.addEventListener("click", function(){
  let Keliling = 2 * (parseInt(alas.value) + parseInt(tinggi.value))
  labelKeliling.innerHTML = Keliling + " cm"

  let luas = parseInt(alas.value) * parseInt(tinggi.value)
  labelluas.innerHTML = luas + " cm<sup>2</sup>"
})
