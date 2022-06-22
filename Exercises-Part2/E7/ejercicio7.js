//7. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let inputSentence = document.getElementById('sentence');
let btnCheck = document.getElementById('btn-check');
const result7 = document.getElementById('result7');


btnCheck.addEventListener('click', () => {
    let sentence = inputSentence.value;
    let result = searchVowels(sentence);
    result7.innerHTML = `Resultado: <br/> ${result}`;
});

function searchVowels(sentence) {
    let a = sentence.match(/[a]/gi).length;//Expresion regular [letra a buscar] dentro de la cadena
    let e = sentence.match(/[e]/gi).length;
    let i = sentence.match(/[i]/gi).length;
    let o = sentence.match(/[o]/gi).length;
    let u = sentence.match(/[u]/gi).length;

    return (`
        A: ${a} <br/>
        E: ${e} <br/>
        I: ${i} <br/>
        O: ${o} <br/>
        U: ${u} <br/>
    `)

};
