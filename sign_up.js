const user_email=document.getElementById('email');
const first_name=document.getElementById("firstname");
const las_name=document.getElementById("lastname");
const password=document.getElementById('password');
const confirm_pass=document.getElementById('confirm_pass');
const signup_form=document.getElementById('signup');
const inputs=document.querySelectorAll('input');
const small=document.getElementsByTagName('small');
const error=document.querySelectorAll('.error');
const input_text=document.querySelectorAll('input[type=text]');
let error_password=password.nextElementSibling;
let flag=false;

 console.log(password,confirm_pass);
signup_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    inputs.forEach(function(item,index){
        if( item.value==''){
           error[index].innerText="* this field is requierd";
           error[index].classList.remove('hidden');
           

        }else{
            error[index].classList.add('hidden');
        }
         
    });
   
     
   if(password.value.toString().length<8 &&password.value!=""){

      error_password.textContent="*password should be  8 charcter or more ";
      error_password.classList.remove('hidden');
      
   }
   if(password.value!==confirm_pass.value&&password.value!=""&& confirm_pass.value!=""){
    // error_password.classList.add('hidden');
    const cont_errorMassage=confirm_pass.nextElementSibling;
    cont_errorMassage.textContent="password is not correct";
    cont_errorMassage.classList.remove('hidden');
     console.log(confirm_pass.nextElementSibling);
}
   
      
    
   const email_local= window.localStorage.getItem("email");
   console.log("local",email_local);
    if(user_email.value===email_local){
        console.log("l");
    }
    else{
    window.localStorage.setItem("user_name",`${first_name.value} ${las_name.value}`);
    window.localStorage.setItem("email", user_email.value);
    window.localStorage.setItem("password",password.value);
    
   
    }
   
     
   
});


