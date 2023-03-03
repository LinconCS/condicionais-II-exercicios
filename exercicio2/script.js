// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

// switch case
function verificaNacionalidade() {
let nacionalidade = prompt('Digite aqui a sua nacionalidade').toLowerCase()
switch (nacionalidade) {
    case 'brasileira':
    case 'brasileiro':
        console.log(`Você é Brasileiro(a)`)
        break;
    case 'argentina':
    case 'argentino':
        console.log(`Você é Argentino(a)`)
        break;
    case 'uruguaio':
    case 'uruguaia':
        console.log(`Você é Uruguaio(a)`)
        break;
    case 'chileno':
    case 'chilena':
        console.log(`Você é Chileno(a)`)
        break;
    case 'colombiano':
    case 'colombiana':
        console.log(`Você é Colombiano(a)`)
        break;
    default:
        console.log('nacionalidade não encontrada')
        break;
}
}

verificaNacionalidade()