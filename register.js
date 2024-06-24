function validateEmail(userEmail) {
   var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
   return regex.test(userEmail);
}

function checkForm() {
    let email = document.getElementById('email');
    let password1 = document.getElementById('psw');
    let password2 = document.getElementById('pswrepeat');
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
  //   if(email.value == ""){
  //     alert('Please enter email');
  //     return false;
  //  }
     if(password1.value == ""){
        alert('Please enter Password');
        return false;
     }
     if(password2.value == ""){
        alert('Please enter Repeat Password');
        return false;
     }
  //  //   check email
    
  //   let bCheckEmail = validateEmail(email.value);
  //   let errorEmail = document.getElementById('emailError');
  //   if( !bCheckEmail ) {

  //       errorEmail.innerText = 'Email is not valid';
  //       return false;
  //   }
  //   else
  //   {
  //       errorEmail.innerText = '';
  //   }
 
      // check pass
    let passworError = document.getElementById('passwordMatchError');

    if(password1.value !== password2.value )
    {
        passworError.innerText = 'Password not match';
        return false;
    }
    else
    {
        passworError.innerText = '';
    }
     return true;
}
