let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Encontra o elemento HTML pela tag
    campo.innerHTML = texto; // Coloca o texto dentro do elemento
    responsiveVoice.speak(texto, 'Brazilian Portuguse Famele', {rate:1.2});
};

function exibirMensageminicial() {
    exibirTextoNaTela ('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p',  `Digite um número entre 1 e ${numeroLimite}`);    
};
exibirMensageminicial();

function verificarChute() {
    let chute = document.querySelector('input').value; //localiza o primeiro elemento <input> da página e pega o valor que o usuário digitou nele.
    if (chute === '') {
        exibirTextoNaTela('p', 'Por favor, digite um número antes de continuar.')
        return;
    }
    if (tentativas == 10) {
        exibirTextoNaTela()
    }
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentatias' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++
        limpaCampo();
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;    
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);        
        return numeroEscolhido;
    }
};

function limpaCampo() {
    chute = document.querySelector('input'); 
    chute.value = ''; 
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};





// // Crie uma lista vazia, com o nome listaGenerica
// let listaGenerica = [];

// //Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
// // 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
// //Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// console.log(linguagensDeProgramacao);

// //Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// let listaNomes = ['Guilherme', 'Larissa', 'Mel']
// console.log(listaNomes [0]);

// //Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// let outrosNomes = ['Lucas', 'Maria', 'João'];
// console.log(outrosNomes [1]);

// //Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
// let outrosNomes2 = ['Marcos', 'Rodrigo', 'Rafael'];
// console.log(outrosNomes2 [2]);











































// Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calcularIMC(peso, altura) {
//     Number(prompt('Digite sua altura.' ))
//     Number(prompt('Agora seu peso.' ))
//     return peso / (altura * altura);
// };
// //Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// let IMC = calcularIMC(75, 1.70);
// alert(`Seu IMC é ${IMC.toFixed(2)}`);

// function fatorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * fatorial(n - 1);
//     }
// };


//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
// function convertDolar(dolar) {
//     let real = Number(prompt('Qual o valor em reais você quer converter?'))
//     return real / dolar;
// };
// let dolar = convertDolar(5.10);
// alert(`Seu valor em dolares é ${dolar.toFixed(2)}`);


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularSalaCircular(r) {
//     const pi = 3.14;
//     let area = pi * (r ** 2);
//     let perimetro = 2 * pi * r;

//     alert(`Área da sala: ${area.toFixed(2)}`);
//     alert(`Perímetro da sala: ${perimetro.toFixed(2)}`);
    
// };

// function obterDataAtual() {
//     let dataAtual = new Date();
//     let ano = dataAtual.getFullYear();
//     let mes = dataAtual.getMonth() + 1;
//     let dia = dataAtual.getDate();
//     return `${dia}/${mes}/${ano}`;
// }
// alert(`Data atual: ${obterDataAtual()}`)


















// // //Criar uma função que exibe "Olá, mundo!" no console.
// function exibe() {
//     alert('Olá, mundo!');
// };
// exibe()

// //Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// // //Capturar antes da função pode ser útil se você for usar o nome em mais de um lugar.
// // //Capturar dentro da funcao é útil se for só para essa função.
// function recebeNome(nome) {
//     let nome = prompt('Digite seu nome:');
//     console.log(`Olá, ${nome}`);
// }
// recebeNome();

// //Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobrar(numero) {
//     return numero * 2;
// }
// let resultado1 = dobrar(5);
// console.log(`O dobro de 5 é ${resultado1}`);


// //Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function calcularMedia(valor1, valor2, valor3) {
//     return(valor1, valor2, valor3) / 3;
// }
// //Aplicação e visualização dos resultados
// let resultado2 = calcularMedia(5, 10, 3);
// console.log(resultado2);

// //Criar uma função que recebe dois números como parâmetros e retorna o maior deles
// function maiorNumero(a, b) {
//     if (a > b){
//         return a;
//     } else {
//         return b;
//     }
// };

// let resultado3 = maiorNumero(10, 32);
// console.log(`O maior número é ${resultado3}`);

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// //"potência ao quadrado"
// function quadrado(numero) {
//     return numero * numero;
// }

// let resultado4 = quadrado(4);
// alert(`O resultado é ${resultado4}`);