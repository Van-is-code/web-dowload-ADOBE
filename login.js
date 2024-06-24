
 function validateEmail(userEmail) {
    var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(userEmail);
 }
 
 function checkForm() { 
     let email = document.getElementById('email');
     let password1 = document.getElementById('psw');
//   check email
let bCheckEmail = validateEmail(email.value);
let errorEmail = document.getElementById('emailError');
if( !bCheckEmail ) {

    errorEmail.innerText = 'Email is not valid';
    return false;
}
else
{
    errorEmail.innerText = '';
}

    //  checkForm
      if(password1.value == ""){
        alert('Please enter password');
        return false;
     }
      return true;
 }
 function submit()
 {
  window.location.href = "home.html"
 }

 