    $(document).ready(function(){ 

    $("#start").on("click", function(){
      $("#start").remove();
       game.loadQuestion();
    })
    
    $(document).on('click','.answer-button',function(e){
    game.clicked(e);
    })
    
    $(document).on('click', '#reset', function(){
      game.reset();
    })
    
    var questions = [{
    question: "Which artist or band opened the Woodstock Festival in 1969?",
    answers: ["Joe Cocker", "Jimi Hendrix", "Richie Havens", "Janis Joplin"],
    correctAnswer: "Richie Havens",
    image: "assets/images.gif"
    }, {
    
    question: "Which European country hosts the annual music festival Tomorrowland?",
    answers: ["Germany", "Belgium","Denmark", "Greece"],
    correctAnswer: "Belguim",
    image: "assets/images.gif"
    },{
    
    question: "Which band realeased the album Abbey Road?",
    answers: ["The Monkees", "The Rolling Stones","Pink Floyd", "The Beatles"],
    correctAnswer: "The Beatles",
    image: "assets/images.gif"
    },{

    question: "What is the name of the lead singer for Red Hot Chili Peppers?", 
    answers: ["Trent Reznor", "Anthony Kiedis", "Jack White", "Gavin Rossdale"],
    correctAnswer: "Anthony Kiedis",
    image: "assets/images.gif"
    },{

    question: "Which artist holds the record for the most Grammys won?",
    answers: ["Michael Jackson", "George Solti", "Quincy Jones", "Alison Krauss"],
    correctAnswer: "George Solti",
    image: "assets/images.gif"
    },{

    question: "Which band produced the theme song for The Big Bang Thory?",
    answers: ["Barenaked Ladies", "Green Day", "Weezer", "Blind Melon"],
    correctAnswer: "Barenaked Ladies",
    image: "assets/images.gif"
    },{

    question: "What was the name of Nirvana's debut album?",
    answers: ["Volume 1","In Bloom", "Bleach", "Lithium"], 
    correctAnswer: "Bleach",
    image: "assets/image.gif"
    },{
    
    question: "What band does David Groel lead sing for?",
    answers: ["Rage Against the Machine", "Snow Patrol","Imagine Dragons","Foo Fighters"],
    correctAnswer: "Dave Grohl",
    image: "assets/image.gif"
    },{
      
    question: "Which latin artist is known as Mr. World Wide?",
    answers: ["Pitbull", "Julio Iglesias", "Marc Anthony", "Santana"],
    correctAnswer: "Pitbull",
    image: "assets/image.gif"
    },{

    querstion: "Which band headlined for Super Bowl LIII?",
    answers: ["Justin Timberlake","Travis Scott", "Maroon 5", "Coldplay"],
    correctAnswer: "Maroon5",
    image: "assets,image.gif"
    }];      
                    
         function greeting() {
        startTrivia = $("<button>");
        startTrivia.addClass("text-center btn btn-warning btn-lg startBtn");
        startTrivia.text("Start Trivia");
        $(".main-area").html(startTrivia);
        console.log(greeting);
      };
        greeting();
    $(".startBtn").on("click", function(event) {
      gameHTML();
      timerTrivia();
    });
  });

  function triviaTimeOut(){
    wrongAnswers++; 
    triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>";
    $(".main-area").html(triviaHTML);
    setTimeout(wait, 3000);
    var loss = $("<p>");
    loss.addClass("text-center");
    loss.text("You ran out of time! The correct answer is: " + correctAnswers[currentQuestion]);
    $(".main-area").append(loss);
  }

  function triviaWin() {
    correctAswers++;
    triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>";
    $(".main-area").html(triviaHTML);
    setTimeout(wait,3000);
    var win = $("<p>");
    win.addClass("text-center");
    win.text("Rock On! You are correct: " + correct[currentQuestion]);
    $(".main-area").append(win);
    $(".main-area").append(images[currentQuestion]);
  };

  function triviaLoss() {
    wrongAnswers++;
    triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>";
    $(".main-area").html(triviaHTML);
    setTimeout(wait,3000);
    var loss = $("<p>");
    loss.addClass("text-center");
    loss.text("WRONG!!! The correct answer is: " + correct[currentQuestion]);
    $(".main-area").append(loss);
  };

    function gameHTML(){}
    triviaHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>";
    $(".main-area").html(triviaHTML);
    for (var i=0; i<4; i++) {
      var answerBtn = $("<button>");
      answerBtn.addClass("text-center btn btn-warning btn-lg answer");
      answerBtn.text(choices[currentQuestion][i]);
      $("main-area").append(answerBtn);
  }

  $(".answer").on("click", function(event) {
    selectedAnswer = $(this).text();
    if (selectedAnswer === correct[currentQuest]) {
      triviaWin();
      clearInterval(timer);

    } else {
      clearInterval(timer);
      triviaLoss();

    };
  }); 

  function wait() {
    if (currentQuestion < 9) {
        currentQuestion++;
        gameHTML();
        counter = 10;
        timerTrivia();
    }
    else {
        results();
    }
};

function timerTrivia() {
	timer = setInterval(tenSeconds, 10000);
	function tenSeconds() {
		if (counter === 0) {
			clearInterval(timer);
			triviaTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	};
};

function results() {

		resetTrivia = $("<button>");
		resetTrivia.addClass("text-center btn btn-warning btn-lg resetBtn");
		resetTrivia.text("Play Again!");
		$(".main-area").html(resetTrivia);
		resetTitle = $("<h2>");
		resetTitle.addClass("text-center").text("And the results are...");
		$(".main-area").append(resetTitle);
		var summaryCorrect = $("<p>");
		summaryCorrect.addClass("text-center").text("Correct Answers: " + correctAnswers);
		$(".main-area").append(summaryCorrect);
		var summaryWrong = $("<p>");
		summaryWrong.addClass("text-center").text("Wrong Answers: " + wrongAnswers);
		$(".main-area").append(summaryWrong);

		$(".resetBtn").on("click", function(event) {
        	window.location.reload();
    	});	
};

    results();
      
  




















