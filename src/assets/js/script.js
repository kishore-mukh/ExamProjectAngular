// selecting all required elements 
const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

// if startQuiz button is clicked
start_btn.onclick = function() {
    info_box.classList.add("activeInfo")
}

// if exitQuiz button is clicked
exit_btn.onclick = function() {
    info_box.classList.remove("activeInfo")
}

//if continue button is clicked
continue_btn.onclick = function() {
    info_box.classList.remove("activeInfo")//hide info box
    start_btn.classList.remove("activeStart")//hide start btn
    quiz_box.classList.add("activeQuiz");//show quiz box
    showQuestions(0); //calling showQuestions function
}

let que_count = 0;
let userScore = 0;

//getting questions and options and options 
function showQuestions(Index)
{
    const que_text = document.querySelector(".que_text");

    //console.log(questions.question);
    let que_tag = "<span>"+questions[Index].num+". "+questions[Index].question+"</span>";

    let option_tag = 
    '<div class="option">'+questions[Index].options[0]+'</div>'
    +'<div class="option">'+questions[Index].options[1]+'</div>'
    +'<div class="option">'+questions[Index].options[2]+'</div>'
    +'<div class="option">'+questions[Index].options[3]+'</div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    console.log(Option);
    //console.log(option)

    // setting onclick attribute to a available options
    for(i=0; i<option.length; i++)
    {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer)
{
    let userAns = answer.textcontent;
    let correctAns = questions[0].answer; //getting correct answer from user
    
    if(userAns == correctAns){
        //if user selected option is equal to array's correct answer
        userScore += 1;
        console.log("correct Answer");
        console.log("your Score is "+ userScore);
    }
    else
    {
         //if user selected option is equal to array's incorrect answer
         userScore += 0;
         console.log("incorrect Answer");
         console.log("your Score is "+ userScore);

         for(i=0; i<alloptions; i++)
        {
             if(option_list.children[i].textcontent == correctAns) 
            {
                option_list.children[i].setAttribute("class","option correct");
            }
        }
    }


    for(i=0; i<alloptions; i++){
        option_list.children[i].classList.add("enabled");
    }
}