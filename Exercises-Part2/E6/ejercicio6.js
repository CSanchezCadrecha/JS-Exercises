// 6. Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.

let inputSentence = document.getElementById('sentence');
let btnCheck = document.getElementById('btn-check');
const result6 = document.getElementById('result6');


 btnCheck.addEventListener('click', () => {
    let sentence = inputSentence.value;
    let result = searchAs(sentence);
    result6.innerHTML = `Resultado ${result}`;
});

function searchAs(sentence){
    let vowels = sentence.match(/[aeiou]/gi).length;//Expresion regular [letra a buscar] dentro de la cadena
    return vowels;                                  //Las encuentra todas por el modificador g 
                                                    //no distingue entre mayúsculas y minúsculas por el modificador i.
};
