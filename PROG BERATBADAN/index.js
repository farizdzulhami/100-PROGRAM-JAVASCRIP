        const berat = parseFloat(prompt("Masukkan berat badan (kg):"));
        const tinggi = parseFloat(prompt("Masukkan tinggi badan (m):"));

        console.log("=".repeat(30));

        const bmi = berat / (tinggi ** 2);

        if (bmi < 18.5) {
            console.log("Berat Badan Kamu Kurang.");
        } else if (bmi < 24.9) {
            console.log("Berat Badan Kamu Normal.");
        } else if (bmi < 29.9) {
            console.log("Kamu Kelebihan Berat Badan.");
        } else {
            console.log("Kamu Mengalami Obesitas.");
        }