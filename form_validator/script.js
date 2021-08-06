const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')

const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const showErrors = (input, message) => {
  const formControl = input.parentElement
  const smallTag = formControl.querySelector('small')
  
  formControl.className = 'form-control error'
  smallTag.innerText = message
}

const showSuccess = input => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'

}

const checkRequired = fieldsArr => {
  fieldsArr.forEach(field => {
    const fieldId = field.id[0].toUpperCase() + field.id.substring(1)

    if (field.value.trim() === '') {
      showErrors(field, `${fieldId} is required`)
    } else {
      showSuccess(field)
    }
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  
  checkRequired([username, email, password, passwordConfirm])
})

