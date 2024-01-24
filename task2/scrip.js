const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const myForm = document.querySelector('#myForm')
const isadmin =document.querySelector('#isadmin')
const passwordconfirm = document.querySelector('#passwordconfirm')
const submitbtn = document.querySelector('#submit')
const university = document.querySelector('#university')
const region = document.querySelector('#region')
const file = document.querySelector('#file')
password.addEventListener("length",()=>{
    if(password.TEXT_NODE<6){
        alert("Password value must be minimum 6")
    }
})

myForm.addEventListener('submit', (e) => {
e.preventDefault()
const user = {
username: username.value,
email: email.value,
password: password.value,
passwordconfirm: passwordconfirm.value,

 }
 if (password.value == passwordconfirm.value) {
    window.location = 'about.html'
    // alert('Confirm password is not match Password !')
    return
 } else 
    alert('Confirm password is not match Password !')
 }
   
    
 
// if(submitbtn.)
)
function removeDisabled(anyimput) {
    anyimput.addEventListener('change', () => {
        if (username.value && email.value && password.value && passwordconfirm.value) {
            submitbtn.removeAttribute('disabled')
        } else {
            submitbtn.setAttribute('disabled', true)
        }
    })

}
removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
removeDisabled(passwordconfirm)
removeDisabled(university)
removeDisabled(region)
removeDisabled(file)