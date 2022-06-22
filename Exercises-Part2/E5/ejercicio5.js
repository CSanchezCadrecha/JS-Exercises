//5. Escribe un programa que pida una frase y escriba las vocales que aparecen

let inputSentence = document.getElementById('sentence');
let btnCheck = document.getElementById('btn-check');
const result5 = document.getElementById('result5');


btnCheck.addEventListener('click', () => {
    let sentence = inputSentence.value;
    let result = searchVowels(sentence);
    result5.innerHTML = `Resultado ${result}`;
});

function searchVowels(sentence) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.substr(i, 1) === "a" || sentence.substr(i, 1) === "e" || sentence.substr(i, 1) === "i" ||
            sentence.substr(i, 1) === "o" || sentence.substr(i, 1) === "u") {
            document.write(sentence.substr(i, 1));
        }
    }
}

