
    document.getElementById("hitung").addEventListener("click", function() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    const tampilKeliling = document.getElementById("keliling");
    const tampilLuas = document.getElementById("luas");

    // Rumus Persegi
    const keliling = 4 * sisi;
    const luas = sisi * sisi;

    tampilKeliling.innerHTML = keliling.toFixed(2) + " cm";
    tampilLuas.innerHTML = luas.toFixed(2) + " cm<sup>2</sup>";
});
