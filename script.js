// Função para verificar maioridade
function verificarMaioridade() {
    let idade = prompt("Digite sua idade:");
    idade = parseInt(idade);
  
    if (idade >= 18) {
      alert("Você é maior de idade.");
    } else {
      alert("Você é menor de idade.");
    }
  }
  
  // Função para verificar se o número é par ou ímpar
  function verificarParOuImpar() {
    let numero = prompt("Digite um número:");
    numero = parseInt(numero);
  
    if (numero % 2 === 0) {
      alert("O número é par.");
    } else {
      alert("O número é ímpar.");
    }
  }
  
  // Função para verificar se o número é positivo, negativo ou zero
  function verificarPositivoNegativoOuZero() {
    let numero = prompt("Digite um número:");
    numero = parseFloat(numero);
  
    if (numero > 0) {
      alert("O número é positivo.");
    } else if (numero < 0) {
      alert("O número é negativo.");
    } else {
      alert("O número é zero.");
    }
  }
  
  // Função para exibir a tabuada de um número
  function exibirTabuada() {
    let numero = prompt("Digite um número para ver a tabuada:");
    numero = parseInt(numero);
  
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
  }
  
  // Chamando as funções
  verificarMaioridade();
  verificarParOuImpar();
  verificarPositivoNegativoOuZero();
  exibirTabuada();
  
