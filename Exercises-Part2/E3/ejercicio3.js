//3. Escribe un programa que pida un número y diga si es divisible por 2

let inputNumber = document.getElementById('number');
const btnCheck = document.getElementById('btn-check');
const result3 = document.getElementById('result3');

btnCheck.addEventListener('click', () => { //El valor se recoge cuando hacemos click en el botón
    let number = inputNumber.value; //Recupera el valor del primer input
    let result = checkEven(number); //Llama a la función
    result3.innerHTML = `Resultado  ${result}`;//Recupera el resultado

});


function checkEven(number) {
    if (number % 2 == 0) {
        return ` Si es divisible por dos`;
    } else {
        return ` No es divisible por dos`;
    }

}

