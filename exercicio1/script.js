// a) utilizando if aninhado
const numeroDivisivelDoisOuTres = Number(prompt(`Digite um número:`))

if(numeroDivisivelDoisOuTres % 2 !== 0) {
    if (numeroDivisivelDoisOuTres % 3 !== 0) {
        console.log(`O número ${numeroDivisivelDoisOuTres} não é divisível por 2 nem por 3!`)
    } else {
        console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e/ou por 3.`)
    }
} else {
    console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e/ou por 3`)
}


// outro modelo utilizando if aninhado

if(!(numeroDivisivelDoisOuTres % 2 === 0)) {
    if (!(numeroDivisivelDoisOuTres % 3 === 0)) {
        console.log(`O número ${numeroDivisivelDoisOuTres} não é divisível por 2 nem por 3!`)
    } else {
        console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e/ou por 3.`)
    }
} else {
    console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e/ou por 3`)
}

// mais um modelo utilizando if aninhado

if(numeroDivisivelDoisOuTres % 2 === 0) {
    if (numeroDivisivelDoisOuTres % 3 === 0) {
        console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e por 3!`)
    } else {
        console.log(`O número ${numeroDivisivelDoisOuTres} é divisível apenas por 2.`)
    }
} else if (numeroDivisivelDoisOuTres % 3 === 0) {
    console.log(`O número ${numeroDivisivelDoisOuTres} é divisível apenas por 3.`)
} else {
    console.log(`O número ${numeroDivisivelDoisOuTres} não é divisível por 2 e nem por 3`)
}

// b) utilizando operador lógico
if(numeroDivisivelDoisOuTres % 2 === 0 || numeroDivisivelDoisOuTres % 3 === 0) {
  console.log(`O número ${numeroDivisivelDoisOuTres} é divisível por 2 e/ou por 3!`)
} else {
  console.log(`O número ${numeroDivisivelDoisOuTres} não é divisível por 2 nem por 3.`)
}