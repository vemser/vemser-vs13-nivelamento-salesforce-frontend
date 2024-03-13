const names = ["Rafael", "Cris"]
const car = {
  marca: "Honda",
  valor: 120000
}



const number = 20
const number2 = 40

//console.log("O número1 = " + number + " O número 2 = " + number2)

//console.log(number == number2) //true, porque o valor é igual.
//console.log(number === number2) //false, porque o valor é igual, MAS o tipo Não.


//Template String - Interpolação:
const people = [
  { name: "Rafael", age: 20 },
  { name: "Fulano", age: 30 }
]

//console.log(`O nome da 1a pessoa é ${people[0].name} e a idade é ${people[0].age}`)


const number3 = 30


function soma(num1, num2, num3 = 10) {
  return num1 + num2 + num3

  //1 + undefined + 10
}

console.log(soma(1, 2))
console.log(soma(3, 3))
