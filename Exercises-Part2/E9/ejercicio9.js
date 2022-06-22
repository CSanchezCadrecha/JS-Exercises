/* 9. Añadir al ejercicio anterior que nos diga por cuál de los cuatro
         es divisible (hay que decir todos por los que es divisible) */

let inputNumber1 = document.getElementById('number1');
let btnCheck = document.getElementById('btn-check');
let result9 = document.getElementById('result9');

btnCheck.addEventListener('click', () => {
    let number1 = inputNumber1.value;
    let result = divisible(number1);
    result9.innerHTML = `Resultado: ${result}`; 
});

function divisible(number1) {

    if (number1 % 2 === 0 || number1 % 3 === 0 || number1 % 5 === 0 || number1 % 7 === 0) {
        if (number1 % 2 === 0) {
            //return ("Es divisible por 2");
            document.write(`Resultado: ${number1} Es divisible por 2 <br/>`);
        }
        if (number1 % 3 === 0) {
            //return ("Es divisible por 3");
           // result9.innerHTML="Es divisible por 3";
           document.write(`Resultado: ${number1} Es divisible por 3 <br/>`);
        }
        if (number1 % 5 === 0) {
            //return("Es divisible por 5");
           // result9.innerHTML="Es divisible por 5";
           document.write(`Resultado: ${number1} Es divisible por 5 <br/>`);
        }
        if (number1 % 7 === 0) {
            //return("Es divisible por 7");
            document.write(`Resultado: ${number1} Es divisible por 7 <br/>`);
        }
    } else {
        return("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
    }
}; 