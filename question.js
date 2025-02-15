const question_title = document.getElementById("titel_ques");
const answer_options = document.getElementById("answer_options");
const prev_arrow = document.getElementById("prev_arrow");
const next_arrow = document.getElementById("next_arrow");
const submit = document.getElementById("submit");
const current_question=document.getElementById("current_question");
const question =document.getElementById("all_Question_page");
const img = document.getElementById("img");
const img_status = document.getElementById("img_status");

let count = 0;
let selected_answers = [];
let score = 0;
let data; 
console.log(answer_options);

async function get_ques(params) {
  try{
    img.src="images/loading_page.png";
    question.classList.add("hidden_img");
    img_status.classList.remove("hidden_img");

    const res = await fetch("backend.json");
    data = await res.json();
    if(data.length === 0){
      img.src="images/empty_data.jpg";
      question.classList.add("hidden_img");
      img_status.classList.remove("hidden_img");
      
    }else{
      question.classList.remove("hidden_img");
     img_status.classList.add("hidden_img");
      display(data);
    }
   

  }catch(error){
    console.log("error :",error);
    img.src="images/error_404.jpg";
    question.style.display="none";
    img_status.classList.remove("hidden_img");
  }
 
  next_arrow.addEventListener("click", () => {
    const number_ques=Object.entries(data).length ;
    
    if (count <number_ques- 1) {
      count++;
      display(data);
    }
  });
  prev_arrow.addEventListener("click", () => {
    if (count > 0) {
      count--;
      display(data);
    }
  });
  submit.addEventListener("click",()=>{
      data.forEach((element,index)=>{
        if(element.answer===selected_answers[index]){
            score+=10;
            console.log(element.answer);
           
        }
           
      });
      console.log(`score${score}`);
      window.localStorage.setItem("total_score",score);
      if(score >=50){
        window.location.replace("success.html");
      }else{
        window.location.replace("fail.html");
      }
      
      
  });
 
} 
get_ques();
function display(data) {
  answer_options.innerHTML = "";
   console.log(data[count].options);
   console.log(question_title.firstElementChild);
  question_title.firstElementChild.textContent = data[count].question;
  question_title.classList.remove("hidden");
  const options = data[count].options;
  

  options.forEach((element) => {
    const li = document.createElement(`li`);
    li.classList.add("bg-blue-100", "border", "p-2", "rounded-lg");
    li.textContent = element;
    answer_options.append(li);
    answer_options.classList.remove("hidden");

    if (selected_answers[count] == element) {
      li.classList.add("bg_light_blue");
    }

    li.addEventListener("click", () => {
      const Options = answer_options.querySelectorAll("li");
      Options.forEach((item) => item.classList.remove("bg_light_blue"));
       li.classList.add("bg_light_blue");
      selected_answers[count] = element;
      console.log(selected_answers);
    });
    
  });
  current_question.textContent=`${count+1} of ${Object.entries(data).length }`;

}
///////////////////////////////timer
const timer = document.getElementById('countdown');
let timeRemaining = 240 /*  4*60 */; 

function formatTime(value) {
  return value < 10 ? '0' + value : value; 
}

const countdown = setInterval(() => {
  const minutes = formatTime(Math.floor(timeRemaining / 60));
  const seconds = formatTime(timeRemaining % 60);
  timer.textContent = `${minutes}:${seconds}`;

  if (timeRemaining <= 0) {
    clearInterval(countdown);
    window.localStorage.setItem("total_score",score);
    window.location.replace("Exam_closed.html");
  }
  timeRemaining--;
}, 1000); 

//////////////////////////marked question
const flag = document.getElementById('flag');
const marked_ques = document.getElementById('marked_ques');

flag.addEventListener('click',()=>{
   const flagq = document.createElement('div');
   const num = data[count].num;
   const ques_data = data[num];
 

   flagq.className ="bg-light rounded-1 p-2 ps-4 pe-4 d-flex justify-content-between text-center align-items-center gap-1";
   flagq.innerHTML = `
    <span> Question ${num}</span>
    <i class="bi bi-trash-fill" style="cursor: pointer;"></i>`;

    flagq.dataset.questionIndex = count;
    marked_ques.appendChild(flagq);
    flagq.querySelector('.bi-trash-fill').addEventListener('click', () => {
      flagq.remove();
    });

    flagq.addEventListener('click',()=>{
      // console.log(ques_data);
      count = Number(flagq.dataset.questionIndex);
      display(data);
    })
})