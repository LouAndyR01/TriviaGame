

var options= [{
    question: "Which artist or band opened the Woodstock Festival in 1969?",
    choices: ["Joe Cocker", "Jimi Hendrix", "Richie Havens", "Janis Joplin"],
    correctAnswer: "Richie Havens",
      }, {

    question: "Which European country hosts the annual music festival Tomorrowland?",
    choices:  ["Germany", "Belgium","Denmark", "Greece"],
    correctAnswer: "Beligium",
     }, {

    question: "Which band realeased the album Abbey Road?",
    choices: ["The Monkees", "The Rolling Stones","Pink Floyd", "The Beatles"], 
    correctAnswer: "The Beatles",
    }, {

    question: "What is the name of the lead singer for Red Hot Chili Peppers?",
    choices: ["Trent Reznor", "Anthony Kiedis", "Jack White", "Gavin Rossdale"], 
    correctAnswer: "Anthony Kiedis",
    }, {

    question: "Which artist holds the record for the most Grammys won?",
    choices: ["Michael Jackson", "George Solti", "Quincy Jones", "Alison Krauss"],
    correctAnswer: "George Solti", 
    }, {
  
    question: "Which band produced the theme song for The Big Bang Theory?",
    choices: ["Barenaked Ladies", "Green Day", "Weezer", "Blind Melon"], 
    correctAnswer: "Bare Naked Ladies",
    }, {

    question: "What was the name of Nirvana's debut album?",  
    choices: ["Volume 1", "In Bloom", "Bleach", "Lithium"], 
    correctAnswer: "Bleach",
    }, {

    question: "What band does David Groel lead sing for?",
    choices: ["Rage Against the Machine", "Snow Patrol","Imagine Dragons","Foo Fighters"],
    correctAnswer: "David Grohl", 
    }, {

    question: "Which latin artist is known as Mr. World Wide?",
    choices: ["Pitbull", "Julio Iglesias", "Marc Anthony", "Santana"],
    correctAnswer: "Pitbull",
    }, {

    question: "Which band headlined for Super Bowl LIII?",
    choices: ["Justin Timberlake","Travis Scott", "Maroon 5", "Coldplay"],
    correctAnswer: "Maroon 5",
    }];

    var startTrivia;
    var resetTrivia;
    var timer;
    var currentQuestion = 0;
    var selectedAnswer;
    var correctAnswers= 0;
    var wrongAnswers = 0;
    var counter = 10;
    var triviaHTML;

    $(document).ready(function(){

      function greeting() {
        startTrivia = $("<button>");
        startTrivia.addClass("text-center btn btn-warning btn-lg startBtn");
        startTrivia.text("Start Trivia");
        $(".main-area").html(startTrivia);
      };
        greeting();
    $(".startBtn").on("click", function(event) {
      gameHtml();
      timerTrivia();
    });
  });

// not going to use this setup. DO NOT DELETE, JUST IN CASE!!!!
    // "Which artist or band opened the Woodstock Festival in 1969?",
    // "Which European country hosts the annual music festival Tomorrowland?",
    // "Which band realeased the album Abbey Road?",
    // "What is the name of the lead singer for Red Hot Chili Peppers?",
    // "Which artist holds the record for the most Grammys won?",
    // "Which band produced the theme song for The Big Bang THeory?",
    // "What was the name of Nirvana's debut album?",
    // "What band does David Groel lead sing for?",
    // "Which latin artist is known as Mr. World Wide?",
    // "Which band headlined for Super Bowl LIII?",


// var answerChoices= [

//     ["Joe Cocker", "Jimi Hendrix", "Richie Havens", "Janis Joplin"],  
//     ["Germany", "Belgium","Denmark", "Greece"],
//     ["The Monkees", "The Rolling Stones","Pink Floyd", "The Beatles"],
//     ["Trent Reznor", "Anthony Kiedis", "Jack White", "Gavin Rossdale"],
//     ["Michael Jackson", "George Solti", "Quincy Jones", "Alison Krauss"],
//     ["Barenaked Ladies", "Green Day", "Weezer", "Blind Melon"],
//     ["Volume 1","In Bloo", "Bleach", "Lithium"],
//     ["Rage Against the Machine", "Snow Patrol","Imagine Dragons","Foo Fighters"],
//     ["Pitbull", "Julio Iglesias", "Marc Anthony", "Santana"],
//     ["Justin Timberlake","Travis Scott", "Maroon 5", "Coldplay"]],

// var correctAnswers= ["Richie Havens", "Beligium", "The Beatles", "Anthony Kiedis", 
//                         "George Solti", "Bare Naked Ladies", "Bleach", "David Grohl", "Pitbull", "Maroon 5"];





























