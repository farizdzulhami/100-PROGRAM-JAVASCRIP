    const sisi = document.getElementById('sisi')
    const hitung = document.getElementById('hitung')

    const labelKeliling = document.getElementById('Keliling')

    hitung.addEventListener("click", function(){
      let Keliling = 7 * parseInt(sisi.value)
      labelKeliling.innerHTML = Keliling + " cm"
    })