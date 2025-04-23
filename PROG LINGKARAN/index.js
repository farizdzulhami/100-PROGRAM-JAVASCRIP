hasil.addEventListener("click",function(){

    const jari = document.getElementById("jari").value;
    const tampilKeliling = document.getElementById("keliling")
    const tampilLuas = document.getElementById("luas")
    const hasil = document.getElementById("hasil")

    let keliling = 2 * 3.14 * jari 
    let luas = 3.14 * (jari**2)
    tampilKeliling.innerHTML = (Math.floor(keliling) + "cm<s>2</s)up>")
    tampilLuas.innerHTML = (Math.floor(luas) + "cm<sup>2</sup>")
})