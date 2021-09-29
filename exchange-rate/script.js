const currencyElemOne = document.getElementById('currency-one')
const amountElemOne = document.getElementById('amount-one')

const currencyElemTwo = document.getElementById('currency-two')
const amountElemTwo = document.getElementById('amount-two')

const rateElem = document.getElementById('rate')

const swapBtn = document.getElementById('swap')

const calculate = async() => {
  const currOne = currencyElemOne.value
  const currTwo = currencyElemTwo.value
  let data

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currOne}`)
    data = await res.json()

  } catch (err){
    console.error(err)
  }
  rateElem.innerText = `1 ${currOne} = ${data.rates[currTwo]} ${currTwo}`
  amountElemTwo.value = (amountElemOne.value * data.rates[currTwo]).toFixed(2)
}

currencyElemOne.addEventListener('change', calculate)
amountElemOne.addEventListener('input', calculate)

currencyElemTwo.addEventListener('change', calculate)
amountElemTwo.addEventListener('input', calculate)

swapBtn.addEventListener('click', () => {
  const temp = currencyElemOne.value

  currencyElemOne.value = currencyElemTwo.value
  currencyElemTwo.value = temp

  calculate()
})

calculate()
