document.getElementById("hitung").addEventListener("click", function() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const tampilKeliling = document.getElementById("keliling");
    const tampilLuas = document.getElementById("luas");

    // Rumus Persegi Panjang
    const keliling = 2 * (panjang + lebar);
    const luas = panjang * lebar;

    tampilKeliling.innerHTML = keliling.toFixed(2) + " cm";
    tampilLuas.innerHTML = luas.toFixed(2) + " cm<sup>2</sup>";
});