//11. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let inputNumber1 = document.getElementById('num1');
let inputNumber2 = document.getElementById('num2');
let btnCheck = document.getElementById('btn-check');
let result11 = document.getElementById('result11');

btnCheck.addEventListener('click', () => {
    let num1 = inputNumber1.value;
    let num2 = inputNumber2.value;
    let result = commonDividers(num1, num2);
    result11.innerHTML = `Resultado ${result}`;
});

function commonDividers(num1, num2) {
    let menor;
    let i;
    if (num1 < num2) {
        menor = num1;
    } else {
        menor = num2;
    }
    for ( i = 1; i < menor / 2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
           document.write(i, ", ");
           
        }
    }
}; 
