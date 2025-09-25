import React, { useState } from 'react'
import "./App.css"


const Questions = [
    {
    questionText:'what is the capital city of franch',
    answerOption:[
      {answerText:"kampala",iscorrect: false},
       {answerText:"london",iscorrect: false},
        {answerText:"paris",iscorrect: true},
         {answerText:"kampala",iscorrect: false},
    ],
  },


    {
    questionText:'who is a CEO of Tesla',
    answerOption:[
      {answerText:"jeff",iscorrect: false},
       {answerText:"elon",iscorrect: true},
        {answerText:"bill",iscorrect: true},
         {answerText:"kampala",iscorrect: false},
    ],
  },

    {
    questionText:'what is the capital city of indian',
    answerOption:[
      {answerText:"jinja",iscorrect: false},
       {answerText:"london",iscorrect: false},
        {answerText:"mbarara",iscorrect: true},
         {answerText:"kampala",iscorrect: false},
    ]
  },

    {
    questionText:'what is the capital city of afganistan',
    answerOption:[
      {answerText:"dehli",iscorrect: false},
       {answerText:"london",iscorrect: false},
        {answerText:"kabul",iscorrect: true},
         {answerText:"dublin",iscorrect: false},
    ]
  },

    {
    questionText:'what is the capital city of pakistan',
    answerOption:[
      {answerText:"gulu",iscorrect: false},
       {answerText:"islambad",iscorrect: false},
        {answerText:"lira",iscorrect: true},
         {answerText:"kla",iscorrect: false},
    ]
  },


   {
    questionText:'what is the capital city of pakistan',
    answerOption:[
      {answerText:"gulu",iscorrect: false},
       {answerText:"islambad",iscorrect: false},
        {answerText:"lira",iscorrect: true},
         {answerText:"kla",iscorrect: false},
    ]
  },
]


function App(){
  

 const [currentQuestion, setCurrentQuestion] = useState(0)

 const NextQuestion =()=>{
  setCurrentQuestion(currentQuestion + 1)
 }


  return (
    
  
  <div className='App'>
    <div className='container'>Quiz App</div>
    <div className='div-container'>
 <div className='question'>{Questions[currentQuestion]. questionText}</div>
 {Questions[currentQuestion].answerOption.map((Option,index) =>(
 <button className='button'>{Option.answerText}</button>
))}

<button className='button' style={{backgroundColor:"green"}}
onClick={NextQuestion}
>Next Question</button>
<p className='button' style={{backgroundColor:"Gray", textAlign:"center"}}>{ `Question ${currentQuestion + 1} of  ${Questions.length}`} </p>
    </div>

  </div>
     
  )
}

export default App
