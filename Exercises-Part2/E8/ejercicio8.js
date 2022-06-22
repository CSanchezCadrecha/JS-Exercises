//8. Escribe un programa que pida un número
// y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let inputNumber = document.getElementById('number');
//let inputDivisible = document.getElementById('divisible');
let btnCheck = document.getElementById('btn-check');
let result8 = document.getElementById('result8');

btnCheck.addEventListener('click', () => {
    let number = inputNumber.value;
   // let divisibleBy = inputDivisible.value;
    let result = divisible(number);//divisible(number, divisibleBy);
    result8.innerHTML = `Resultado: ${result}`; 
});

/* function divisible(number, divisibleBy){
    if(number % divisibleBy == 0 ){
        return `${number} Es divible por ${divisibleBy}`;
    }  

}; */

 function divisible(number){
    if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0){
        return `Es divisible`;
    }else {
        return `No es divisible`;
    }
}; 