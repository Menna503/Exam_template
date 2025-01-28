const result =document.getElementById('result');
const score = document.getElementById('score');
const loacal_score = window.localStorage.getItem('total_score');
const user_name = window.localStorage.getItem('name');
const exam_submit = document.getElementById('exam_submit');
const fail_in_exam = document.getElementById('fail_in_exam');

score.textContent =`Your Grade is ${loacal_score}%`;
if(loacal_score >=50){
    result.textContent =`Congratulations ${user_name} !!`;
}else{
    result.textContent =`Sorry ${user_name} ,you failed in this exam`;
}
exam_submit.addEventListener('click',()=>{
    window.location.href = "ready_to_start.html";
    window.localStorage.removeItem("total_score",score);
})