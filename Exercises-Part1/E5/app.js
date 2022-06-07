//5.  Escribe un programa que pida un número, pida otro número y escriba
//el resultado de sumar estos dos números.

const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const btn = document.getElementById('btn');
const resultado1 = document.getElementById('result');

btn.addEventListener('click', () =>{
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let resultado = add(num1, num2);
    resultado1.innerHTML = `Resultado : ${resultado}`;
})

function add(num1, num2){
    
    return('Resultado: ', num1 + num2);
}

