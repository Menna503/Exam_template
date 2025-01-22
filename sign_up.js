const user_email=document.getElementById('email');
const password=document.getElementById('password');
const signup_form=document.getElementById('signup');
// console.log(user_email);
signup_form.addEventListener("submit",(e)=>{
    // console.log(e.value);
     e.preventDefault();
    // console.log(user_email.value);
   const email_local= window.localStorage.getItem("email");
   console.log("local",email_local);
    if(user_email.value===email_local){
        alert("you join before with this email try to log in");
    }
    else{
    window.localStorage.setItem("email", user_email.value);
    window.localStorage.setItem("password",password);
    }
   
})