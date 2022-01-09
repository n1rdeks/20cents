const mainBtn = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calcBtn = document.getElementById('calculate-wealth')

let data = []

getRandomUser()
getRandomUser()
getRandomUser()

// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    const user = data.results[0]

    const newUser = {
        name: `${ user.name.first } ${ user.name.last }`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser)
}

function doubleMoney() {
    data = data.map(item => {
        return {...item, money: item.money * 2}
    })

    updateDOM()
}

function sortByMoney() {
    data.sort((a, b) => b.money - a.money)
    updateDOM()
}

function filterRich() {
    data = data.filter(user => user.money >= 1000000)
    updateDOM()
}

function calculate() {
    const sum = data.reduce((acc, user) => (acc += user.money), 0)
    const sumEl = document.createElement('div')
    sumEl.innerHTML = `<h3>Total wealth: <strong>${sum}</strong></h3>`
    main.appendChild(sumEl)
}

function addData(obj) {
    data.push(obj)

    updateDOM()
}

function updateDOM(provideData = data) {
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
    provideData.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element)
    })

}

addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortByMoney)
showBtn.addEventListener('click', filterRich)
calcBtn.addEventListener('click', calculate)
