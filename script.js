function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemperature * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemperature - 32) * 5/9;
    } else {
        result = inputTemperature; // No conversion needed
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}
