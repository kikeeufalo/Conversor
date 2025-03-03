const btnConverter = document.querySelector('#btn-converssor')
const numeros = document.querySelector('#numeros')
const telaResposta = document.querySelector('#algarismo')

const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

btnConverter.addEventListener('click', function() {
    let n = parseInt(numeros.value)

    if (n === '' || isNaN(n)) {
        telaResposta.style.color = 'rgba(0, 0, 0, 0)'
        return alert('erro, insira um digito valido')
    }else {
        let roman = "";
        for (let i = 0; i < romanMap.length; i++) {
            while (n >= romanMap[i].value) {
                roman += romanMap[i].symbol;
                n -= romanMap[i].value;
            }
        }

        displayResposta(roman)
    }
})

function displayResposta(algarismo) {
    telaResposta.textContent = algarismo
    telaResposta.style.color = 'rgba(0,0,0,1)'
}