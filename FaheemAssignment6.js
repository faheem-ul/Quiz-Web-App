
const questionsarr = [{
    question: "What is the national sport of Pakistan?",
    options: ["1- Hockey", "2- Cricket", "3- Football"],
    Answer: "A"
},

{
    question: "2:The Indus Valley Civilization, one of the world's oldest urban civilizations, flourished in which modern-day countries?",
    options: ["1- India and Pakistan", "2- India and Bangladesh", "3- India and Nepal"],
    Answer: "A"
},
{
    question: "3:Who was the Mughal emperor responsible for commissioning the Taj Mahal?",
    options: ["1- Babur", "2- Akbar", "3- Shah Jahan"],
    Answer: "C"
},
{
    question: "4:The partition of India in 1947 resulted in the creation of which two independent nations?",
    options: ["1- India and Pakistan", "2- India and Bangladesh", "3- India and Nepal"],
    Answer: "A"
},
{
    question: "5:Who was the first woman Prime Minister of Pakistan?",
    options: ["1- Fatima Jinnah", "2- BB Bhutto", "3- Kulsoom Nawaz"],
    Answer: "B"
},
{
    question: "6:The 1857 uprising against British rule in India is often referred to as:",
    options: ["1- Jallianwala Bagh Massacre", "2- Salt March", "3- Sepoy Mutiny"],
    Answer: "C"
},
{
    question: "7:Pakistan became a republic in what year, adopting its first constitution?",
    options: ["1- 1947", "2- 1956", "3- 1971"],
    Answer: "B"
},
{
    question: "8:Who is often credited with the founding of the Maurya Empire in ancient India?",
    options: ["1- Chandragupta Maurya", "2- Ashoka the Great", "3- Akbar"],
    Answer: "A"
},
{
    question: "9:The Mughal Empire reached its zenith under the rule of which emperor?",
    options: ["1- Shah Jahan", "2- Babur", "3- Akbar"],
    Answer: "C"
},
{
    question: "10:Who was the spiritual leader and founder of Buddhism?",
    options: ["1- Guru Nanak", "2- Siddhartha Gautama", "3- Confucius"],
    Answer: "B"
},

]

let currentquestion = 0
let score = 0


const questionPara = document.getElementById("question")
const options = document.getElementById("options")
const firstOption = document.getElementById("optiona")
const starte = document.getElementById("btn-start")
const optionContainer = document.getElementById("options")
const nextButton = document.getElementById("btn")
const scoreBtn = document.getElementById("end-btn")
const totalScore = document.getElementById("score");
const total = document.getElementById('totalScore')

document.getElementById('btn-start').addEventListener('click', function () {
    // Hide the introduction elements
    document.getElementById('quizDiv').style.display = 'none';
    document.getElementById('btn-start').style.display = 'none';

    // Show the quiz elements
    document.getElementById('questiondiv').style.display = 'block';
    document.getElementById('options').style.display = 'block';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('end-btn').style.display = 'block';
    document.getElementById('score').style.display = 'block';

   
});


starte.addEventListener('click', startQuiz)

function startQuiz() {
    
    options.style.display = 'block';
    nextButton.style.display = 'block';
    // nextbtn.style.display = 'block';
    
   
    const current = questionsarr[currentquestion];
    questionPara.innerHTML = current.question;
    firstOption.innerHTML = current.options.join('<br>');
    
    starte.style.display = 'none';
    
    
};


nextButton.addEventListener("click", nextbtn)
function nextbtn() {
    let userResponse;
    const name = document.getElementsByClassName("option")
    console.log(name);
    for (let i = 0; i < name.length; i++) {
        if (name[i].checked) {
            userResponse = name[i].value;
        }
    }
    // console.log("user resoponse:> "+userResponse);
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => option.checked = false);

    const current = questionsarr[currentquestion]
    const correctAnswer = current.Answer;
    // console.log("correct ans :> "+correctAnswer);
    
    
    if (userResponse == correctAnswer) {
        score++;
        // console.log("score = "+score);
    }
    
    currentquestion++;
    // console.log("after current= "+currentquestion);
    const newcurrent = questionsarr[currentquestion]
    questionPara.innerHTML = newcurrent.question;
    firstOption.innerHTML = newcurrent.options.join('<br>');
    



    totalScore.innerHTML = score;
    let final = questionsarr.length
    console.log(final);
    total.innerHTML = final

}


function finalscore() {
    totalScore.innerHTML = score;
}

scoreBtn.addEventListener("click", finalscore)

