// Criação de Promessas

const myPromise = new Promise((resolve, reject) => {

    const nome = "Iago"

    if(nome === "Iago") {
        resolve('Usuário Iago encontrado!')
    } else {
        reject('O usuário Iago não foi encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Iago"

    if(nome === "Iago") {
        resolve('Usuário Iago encontrado!')
    } else {
        reject('O usuário Iago não foi encontrado!')
    }
})

// exemplo 1
myPromise2
    .then((data) => {
        return `Bem-vindo, ${data.toUpperCase()}!`
    })
    .then((bemVindo) => {
        console.log(bemVindo)
    })


// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "João"

    if(nome === "Iago") {
        resolve('Usuário Iago encontrado!')
    } else {
        reject('O usuário Iago não foi encontrado!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log('Aconteceu um erro ' + err)
    })


// Resolver várias promessas