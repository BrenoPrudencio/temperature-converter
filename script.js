const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const clearBtn = document.getElementById('clear-btn');

celsius.addEventListener('input', () => {
    if (celsius.value === '') {
        fahrenheit.value = '';
        return;
    }
    const result = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(result.toFixed(2));
});

fahrenheit.addEventListener('input', () => {
    if (fahrenheit.value === '') {
        celsius.value = '';
        return;
    }
    const result = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(result.toFixed(2));
});

clearBtn.addEventListener('click', () => {
    celsius.value = '';
    fahrenheit.value = '';
    celsius.focus();
});