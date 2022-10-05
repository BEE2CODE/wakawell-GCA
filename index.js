const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function toggleHandler(){
  const toggleElement = document.getElementById('form')
  if(toggleElement.style.display === 'block'){
      toggleElement.style.display ='none'
      return
  }
  toggleElement.style.display = 'block'
}
function exit(){
  const toggleElement=document.getElementById('myForm')
  if(toggleElement.style.display ==='block'){
      toggleElement.style.display= 'none'
      return
  }
  toggleElement.style.display = 'block'
}

// let creatPass = document.getElementById('createPassword').value
// let confirmPass = document.getElementById('confirmPassword').value

// function validationForm(){
//     let validate = document.getElementById('lname').value;
//     if (validate == ""){
//         alert("This field is required");
//         return false;
//     }
// }


function myFunction(){
  alert("Successful")
}

function myPassword() {
  let password = document.getElementById("myInput");
  if (password.type === "password") {
      password.type = "text";
  } else {
      password.type = "password";
  }
}
function confirmPassword() {
  let password = document.getElementById("confirm");
  if (password.type === "password") {
      password.type = "text";
  } else {
      password.type = "password";
  }
}
