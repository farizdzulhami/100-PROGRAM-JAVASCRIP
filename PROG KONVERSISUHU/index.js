        function konversi() {
            let celcius = parseFloat(document.getElementById("celcius").value);
            let fahrenheit = (celcius * 9/5) + 32;
            document.getElementById("hasil").innerText = celcius + "°C = " + fahrenheit + "°F";
        }