//2. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres

const inputNumberOne = document.getElementById('number-one');
const inputNumberTwo = document.getElementById('number-two');
const inputNumberThree = document.getElementById('number-three');
const btnCheck = document.getElementById('btn-take-numbers');
let result2 = document.getElementById('result2');

btnCheck.addEventListener('click', () => { //El valor se recoge cuando hacemos click en el botón
    let numberOneUser = inputNumberOne.value; //Recupera el valor del primer input
    let numberTwoUser = inputNumberTwo.value; //Recupera el valor del segundo input
    let numberThreeUser = inputNumberThree.value;
    let result = Math.max(numberOneUser, numberTwoUser, numberThreeUser);
    result2.innerHTML = `El resultado es:  ${result}`;//Recupera el resultado

});




