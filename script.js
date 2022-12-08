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


// Resolver várias promessas com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok!')
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// Várias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok!')
    }, 5000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})


// Fetch request na API do GitHub
// Fetch API

const userName = 'vsiago'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(`Seu usuário é ${data.login}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})