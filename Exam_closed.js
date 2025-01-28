const user = document.getElementById("name_of_user");
const user_name = window.localStorage.getItem("name");
user.textContent = user_name;
const see_result = document.getElementById('see_result');
const loacal_score = window.localStorage.getItem('total_score');

see_result.addEventListener('click',()=>{
    if(loacal_score >=50){
        window.location.href = "success.html";
      }else{
        window.location.href = "fail.html";
      }
})