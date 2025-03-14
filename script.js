const Questions = [
    {
        q: "Fill in the blank:What is my favorite chartcter _____.",
        a: [{text: "iorn fist.", isCorrect: false},
            {text: "cloak and dagger.", isCorrect: false},
            {text: "loki.", isCorrect: true},
            {text: "iron man", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What is my least favorite charter _____.",
        a: [{text: "black panther", isCorrect: false},
            {text: "Iron Fist.", isCorrect: true},
            {text: "docter strange.", isCorrect: false},
            {text: "black widow.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: How many characters are in Marvel Rivals _____.",
        a: [{text: "38.", isCorrect: true},
            {text: "399.", isCorrect: false},
            {text: "44", isCorrect: false},
            {text: "38943.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What is the peak player count _____.",
        a: [{text: "55555.", isCorrect: false},
            {text: "768394.", isCorrect: false},
            {text: "4426900 .", isCorrect: false},
            {text: "644269 ", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
