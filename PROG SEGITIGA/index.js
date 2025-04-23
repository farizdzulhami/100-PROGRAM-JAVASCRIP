
hasil.addEventListener("click",function(){

            
    const hasil = document.getElementById("hasil")
    const alas = document.getElementById("alas").value
    const tinggi = document.getElementById("tinggi").value
    const sisi_a = document.getElementById("sisi_a").value
    const sisi_b = document.getElementById("sisi_b").value
    const sisi_c = document.getElementById("sisi_c").value
    
    const tampilLuas = document.getElementById("luas")
    const tampilkeliling = document.getElementById("keliling")

    let keliling = sisi_a + tinggi + sisi_c;
    let luas = sisi_a * tinggi / 2;

    tampilLuas.innerHTML = luas + "cm<sup>2</sup>"
    tampilkeliling.innerHTML = keliling + "cm<sup>2</sup>"

    
})