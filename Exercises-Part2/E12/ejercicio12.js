/* 12. Escribir un programa que nos diga si un número dado es primo
         (no es divisible por ninguno otro número que no sea él mismo o la unidad) */

let inputNumber = document.getElementById('number');
let btnCheck = document.getElementById('btn-check');
let result12 = document.getElementById('result12');

btnCheck.addEventListener('click', () => {
    let number = inputNumber.value;
    let result = primeNumber(number);
    result12.innerHTML = `Resultado: ${result}`
});

function primeNumber(number) {
    let i = 2;
    while (number % i !== 0 && i < number / 2) {
        i++;
    }
    if (number % i !== 0) {
        return("Este número es primo");
    } else {
        return("Este número no es primo");
    }

    
};
