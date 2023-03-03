//códigos a serem reescritos
const nome = prompt(`Qual o seu nome?`)
const idade = Number(prompt (`Qual a sua idade?`))
// a)
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}


// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

// if ternário
// a) 

nome === 'José' ? console.log(`Oi, Zé!`) : console.log(`Olá, ${nome}.`)

// b)

idade >= 18 ? console.log(`Pode tirar a carteira de motorista!`) : console.log(`Ainda não tem idade para tirar a carteira de motorista!`)
