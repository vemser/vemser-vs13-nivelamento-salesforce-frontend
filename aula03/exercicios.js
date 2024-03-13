/**
 * Ex.01
 * Você foi contratado para criar um programa em JavaScript que converta uma temperatura fornecida
 *  em graus Celsius para graus Fahrenheit. Utilize as fórmulas de conversão apropriadas para realizar 
 * essa tarefa. O programa deve declarar uma constante (celsiusTemperature) com o valor da temperatura 
 * em graus Celsius 
 * e, em seguida, calcular e exibir a correspondente temperatura em graus Fahrenheit.
 */

//const celsiusPrompt = Number(prompt("Digite os graus celsius"))

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

//if (celsiusPrompt) {
//console.log(`${celsiusPrompt}°C em Fahrenheit = ${celsiusToFahrenheit(celsiusPrompt)}F`)
//}

/**
 * 02.
 * Crie um programa em JavaScript que valide se um número fornecido é par ou ímpar. 
 * O programa deve declarar uma variável número, atribuir um valor a ela e, em seguida, 
 * determinar se o número é par ou ímpar sem usar instruções if ou else. 
 * Exiba o resultado.
 * */

// const number = Number(prompt("Digite um número: "))

// function isOddorEven(number) {
//   return number % 2 === 0 ? "par" : "impar"
// }

// if (number) {
//   console.log(isOddorEven(number))
// }


// function getUserOption() {
//   let atendimento = true

//   while (atendimento) {
//     const userOption = Number(prompt("1 - Check-in \n2 - Check-out\n3 - Extender estadia"))

//     switch (userOption) {
//       case 1:
//         alert("Check-in realizado com sucesso!")
//         atendimento = false
//         break;
//       case 2:
//         alert("Check-out realizado com sucesso!")
//         atendimento = false
//         break;
//       case 3:
//         const days = Number(prompt("Quantos dias você vai ficar a mais?"))
//         alert(`Sua estadia foi extendida em: ${days}`)
//         atendimento = false
//         break;
//       default:
//         alert("Opção inválida. Tente novamente")
//         break;
//     }
//   }
// }

// getUserOption()

function userTermAcception() {
  let isUserAgreed = false;

  while (!isUserAgreed) {
    isUserAgreed = confirm("Você concorda com os termos?") // OK = true | cancelar = false
    isUserAgreed ? alert("Aceitação de termos realizada com sucesso") : alert("É necessário aceitar os termos para prosseguir")
  }
}

userTermAcception()
