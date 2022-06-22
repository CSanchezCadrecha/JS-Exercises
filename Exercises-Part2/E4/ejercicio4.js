//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

let inputSentence = document.getElementById('sentence');
let btnCheck = document.getElementById('btn-check');
const result4 = document.getElementById('result4');


 btnCheck.addEventListener('click', () => {
    let sentence = inputSentence.value;
    let result = searchAs(sentence);
    result4.innerHTML = `Resultado ${result}`;

});

function searchAs(sentence){
    let numA = sentence.match(/[a]/gi).length;//Expresion regular [letra a buscar] dentro de la cadena
    return numA;                               //Las encuentra todas por el modificador g 
                                               //no distingue entre mayúsculas y minúsculas por el modificador i.
};



