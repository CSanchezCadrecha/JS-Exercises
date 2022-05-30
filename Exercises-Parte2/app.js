//1.Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.

let num1 = document.getElementById("number-one");
let num2 = document.getElementById("number-two");
let btnCheck = document.getElementById("btn-take-numbers");
let result = document.getElementById("result1");

function indicaMayor() { //Pasamos los numeros pedidos como parametros de la funcion  
    if (num1 > num2) {
        //document.write(num1);
        result.innerHTML = `Número mayor: ${num1.value}`;
    }
   
}

indicaMayor();


//2.Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.





