//1.Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.

const inputNumberOne = document.getElementById('number-one');
const inputNumberTwo = document.getElementById('number-two');
const btnCheck = document.getElementById('btn-take-numbers');
const result1 = document.getElementById('result1');

btnCheck.addEventListener('click', () => { //El valor se recoge cuando hacemos click en el botón
    let numberOneUser = inputNumberOne.value; //Recupera el valor del primer input
    let numberTwoUser = inputNumberTwo.value; //Recupera el valor del segundo input
    // let result = greater(numberOneUser, numberTwoUser); //Llama a la función
    let result = Math.max(numberOneUser, numberTwoUser);
    result1.innerHTML = `El resultado es ${result}`;//Recupera el resultado

});

/* function greater(num1, num2) { //Pasamos los numeros pedidos al usuario, como parametros de la funcion  
    if (num1 > num2) {
        //console.log(numberOneUser);
        return num1;// Devuelve un valor que lo almacenamos en la linea 22
    } else{
         //console.log(numberTwoUser);
    return num2;
    }
   
} */










