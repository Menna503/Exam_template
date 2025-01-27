const question_title = document.getElementById("titel_ques");
const answer_options = document.getElementById("answer_options");
const prev_arrow = document.getElementById("prev_arrow");
const next_arrow = document.getElementById("next_arrow");
const submit=document.getElementById("submit");
const current_question=document.getElementById("current_question");
let count = 0;
let selected_answers = [];
let score=0;
console.log(answer_options);
async function get_ques(params) {
  const res = await fetch("backend.json");
  console.log(res);
  const data = await res.json();
  console.log(data);
  display(data);
  next_arrow.addEventListener("click", () => {
    const number_ques=Object.entries(data).length ;
    if (count <number_ques- 1) {
      // console.log(++count);
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
      window.localStorage.setItem("total score",score);
      
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
      li.classList.add("bg_light_blue");
      selected_answers[count] = element;
      console.log(selected_answers);
    });
  });
  current_question.textContent=`${count+1} of ${Object.entries(data).length }`;

}

