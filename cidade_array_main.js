const readlineSync = require("readline-sync")
const Cidade = require("./cidade_class")

console.log("=============================================")
console.log("Dados da cidade e População:")
console.log("=============================================")

let nome = readlineSync.question("Digite o nome da cidade: ")
let estado = readlineSync.question("Digite o esqtado da cidade: ")
let numPopulacao = readlineSync.question("Digite a população da cidade: ")
let numHomens = readlineSync.question("Digite a quantidade de homens da cidade: ")
let numMulheres = readlineSync.question("Digite a quantidade de mulheres da cidade: ")

const cidade1 = new Cidade(nome, estado, numPopulacao, numHomens, numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()

console.log("===============================================")
console.log("Resultado sobre dados da cidade")
console.log("===============================================")
console.log(`O percentual de mulheres é ${mulheresPercentual.toFixed(0)} % de ${numPopulacao} habitantes`)
console.log(`O percentual de homens é ${homensPercentual.toFixed(0)}  % de ${numPopulacao} habitantes`)
console.log("===============================================")