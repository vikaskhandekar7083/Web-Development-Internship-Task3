// DOM Elements
const form = document.getElementById("conversionForm");
const inputField = document.getElementById("inputDegree");
const inputType = document.getElementById("selectInputDegreeType");
const conversionType = document.getElementById("selectConversionType");
const resultValue = document.getElementById("convertedDegree");
const resultUnit = document.getElementById("convertedUnit");

// Temperature Conversion Logic
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const temp = parseFloat(inputField.value);
    const fromUnit = inputType.value;
    const toUnit = conversionType.value;

    let convertedTemp;

    if (fromUnit === "C") {
        if (toUnit === "F") convertedTemp = (temp * 9) / 5 + 32;
        else if (toUnit === "K") convertedTemp = temp + 273.15;
        else convertedTemp = temp;
    } else if (fromUnit === "F") {
        if (toUnit === "C") convertedTemp = (temp - 32) * (5 / 9);
        else if (toUnit === "K") convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
        else convertedTemp = temp;
    } else if (fromUnit === "K") {
        if (toUnit === "C") convertedTemp = temp - 273.15;
        else if (toUnit === "F") convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
        else convertedTemp = temp;
    }

    // Display Result
    resultValue.textContent = convertedTemp.toFixed(2);
    resultUnit.textContent = toUnit;
});
