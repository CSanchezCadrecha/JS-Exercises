//10. Escribir un programa que escriba en pantalla los divisores de un número dado

let inputNumber = document.getElementById('number');
let btnCheck = document.getElementById('btn-check');
let result10 = document.getElementById('result10');

btnCheck.addEventListener('click', () => {
    let number = inputNumber.value;
    let result = divisible(number);
    result10.innerHTML = `Resultado: ${result}`;
});

function divisible(number) {
    let i;
    for (i = 2; i < number/2; i++) {
        if (number % i === 0) {
            document.write(i, "<br/>");
        }
    }
}




