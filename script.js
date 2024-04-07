document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("inputTemperature");
    const outputTemperature = document.getElementById("outputTemperature");
    const fromUnit = document.getElementById("from");
    const toUnit = document.getElementById("to");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const inputTemp = parseFloat(inputTemperature.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (!isNaN(inputTemp)) {
            let result;
            if (from === "celsius" && to === "fahrenheit") {
                result = (inputTemp * 9/5) + 32;
            } else if (from === "fahrenheit" && to === "celsius") {
                result = (inputTemp - 32) * 5/9;
            } else if (from === "celsius" && to === "kelvin") {
                result = inputTemp + 273.15;
            } else if (from === "kelvin" && to === "celsius") {
                result = inputTemp - 273.15;
            } else if (from === "fahrenheit" && to === "kelvin") {
                result = (inputTemp - 32) * 5/9 + 273.15;
            } else if (from === "kelvin" && to === "fahrenheit") {
                result = (inputTemp - 273.15) * 9/5 + 32;
            } else {
                result = inputTemp; // Same unit, no conversion needed
            }

            outputTemperature.value = result.toFixed(2);
        } else {
            outputTemperature.value = "Invalid input";
        }
    });
});
