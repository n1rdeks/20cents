const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')

const checkEmail = field => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(field.value.trim().toLowerCase()))) {
    showSuccess(field)
  } else {
    showError(field, 'Email is not valid')
  }
}

const showError = (input, message) => {
  const formControl = input.parentElement
  const smallTag = formControl.querySelector('small')
  
  formControl.className = 'form-control error'
  smallTag.innerText = message
}

const showSuccess = input => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'

}
const checkPasswordMatch = (pass, passConfirm) => {
  if (pass.value !== passConfirm.value) {
    showError(passConfirm, "Passwords do not match")
  } else {
    showSuccess(passConfirm)
  }
}

const getFieldName = (field) => {
  return field.id[0].toUpperCase() + field.id.substring(1)
}

const checkRequired = fieldsArr => {
  fieldsArr.forEach(field => {
    if (field.value.trim() === '') {
      showError(field, `${getFieldName(field)} is required`)
    } else {
      showSuccess(field)
    }
  })
}

const checkLength = (field, min, max) => {
  const length = field.value.length

  if(length < min) {
    showError(field, `${getFieldName(field)} must be at least ${min}`)
  } else if(length > max) {
    showError(field, `${getFieldName(field)} must be less than ${max}`)
  } else {
    showSuccess(field)
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const minLengthName = 3
  const maxLengthName = 16
  const minLengthPasswd = 6
  const maxLengthPasswd = 10
  
  checkRequired([username, email, password, passwordConfirm])
  checkLength(username, minLengthName, maxLengthName)
  checkLength(password, minLengthPasswd, maxLengthPasswd)
  checkEmail(email)
  checkPasswordMatch(password, passwordConfirm)
})

