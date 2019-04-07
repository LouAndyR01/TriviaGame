      $(document).ready(function(){ 

              // game start, get rid of start button from page, mouse click //
      $("#start").on("click", function(){
        $("#start").remove();
          game.loadQuestion();
    })
              //on click events here to get game going from mouse click. 
      $(document).on('click','.answer-button',function(e){
      game.clicked(e);
    })
              //on click events here to get game going from mouse click. 
      $(document).on('click', '#reset', function(){
        game.reset();
    })
    
              // setting up all user information.  decided to use this formate instead of the
              // putting all of the items in one array.
  var questions = [{
      question: "Which artist or band opened the Woodstock Festival in 1969?",
      answers: ["Joe Cocker", "Jimi Hendrix", "Richie Havens", "Janis Joplin"],
      correctAnswer: "Richie Havens",
      image: "assets/images/richie_havens.jpg"
    }, {
  
      question: "Which European country hosts the annual music festival Tomorrowland?",
      answers: ["Germany", "Belgium","Denmark", "Greece"],
      correctAnswer: "Belgium",
      image: "assets/images/tomorrowland.gif"
    },{
  
      question: "Which band realeased the album Abbey Road?",
      answers: ["The Monkees", "The Rolling Stones","Pink Floyd", "The Beatles"],
      correctAnswer: "The Beatles",
      image: "assets/images/beatles.gif"
    },{

      question: "What is the name of the lead singer for Red Hot Chili Peppers?", 
      answers: ["Trent Reznor", "Anthony Kiedis", "Jack White", "Gavin Rossdale"],
      correctAnswer: "Anthony Kiedis",
      image: "assets/images/kiedis.gif"
    },{

      question: "Which artist holds the record for the most Grammys won?",
      answers: ["Michael Jackson", "George Solti", "Quincy Jones", "Alison Krauss"],
      correctAnswer: "George Solti",
      image: "assets/images/solti.gif"
    },{

      question: "Which band produced the theme song for The Big Bang Thory?",
      answers: ["Barenaked Ladies", "Green Day", "Weezer", "Blind Melon"],
      correctAnswer: "Barenaked Ladies",
      image: "assets/images/barenakedladies.gif"
    },{

      question: "What was the name of Nirvana's debut album?",
      answers: ["Volume 1","In Bloom", "Bleach", "Lithium"], 
      correctAnswer: "Bleach",
      image: "assets/images/bleach.gif"
    },{
      
      question: "What band does David Grohl lead sing for?",
      answers: ["Rage Against the Machine", "Snow Patrol","Imagine Dragons","Foo Fighters"],
      correctAnswer: "Foo Fighters",
      image: "assets/images/foofighter.gif"
    },{
        
      question: "Which latin artist is known as Mr. World Wide?",
      answers: ["Pitbull", "Julio Iglesias", "Marc Anthony", "Santana"],
      correctAnswer: "Pitbull",
      image: "assets/images/pitbull.gif"
    },{

      question: "Which band headlined for Super Bowl LIII?",
      answers: ["Justin Timberlake","Travis Scott", "Maroon 5", "Coldplay"],
      correctAnswer: "Maroon 5",
      image: "assets/images/maroon5.gif"
    }];  
    
               //clearing variables for scoring //
  var game = {
      questions: questions,
      currentQuestion:0,
      counter:10,
      correct:0,
      incorrect:0,
      unanswered:0,

              //setting up the game timer and time up.
      countdown: function(){
      game.counter--;
      $("#counter").html(game.counter);
      if(game.counter<=0){
      game.timeUp();
      }
    },

               //loading question and begin count down timer. ****needed help here*****
      loadQuestion: function(){
      timer = setInterval(game.countdown,1000);
      $('#wrapper').html("Time Remaining <span id=counter>10</span> Seconds")
      $('#wrapper').append('<h2>' + questions[game.currentQuestion].question +'</h2>');
      for(var i=0; i<questions[game.currentQuestion].answers.length; i++){
      $('#wrapper').append('<button class="answer-button" id="button-'+i+'"data-name="'+questions[game.currentQuestion].answers[i] +'">'+questions[game.currentQuestion].answers[i]+'</button>');
      }
      },

      nextQuestion: function() {
      game.counter = 10;
      $('#counter').html(game.counter);
      $("#image").html("");
      game.currentQuestion++;
      game.loadQuestion();
    },
                   //correct answer function here and set up for timeout. copy for wrong answer.
                   //correct banner and image
    correctAnswer: function() {
      console.log("correct");
      clearInterval(timer);
      game.correct++;
      $('#wrapper').html("Correct! You Rock!!!");
      $('#image').html("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,3000);
      } else {
          setTimeout(game.nextQuestion,3000);
      }
    },
                    //wrong answer function here and set up for next question.
                    //wrong answer banner and image for right answer.
    wrongAnswer: function() {
      clearInterval(timer);
      game.incorrect++;
      $('#wrapper').html("Wrong Answer!");
      $('#wrapper').append('<h3>The correct answer is: ' +questions[game.currentQuestion].correctAnswer+ '</h3>');
      $('#image').html("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,3000);
      } else {
          setTimeout(game.nextQuestion,3000);
      }
    },

                    //no answer function here, time ran out.
      timeUp: function() {
      clearInterval(timer);
      game.unanswered++;
      $('#wrapper').html('Time is Up! ');
      $('#wrapper').append('The correct answer is: ' +questions[game.currentQuestion].correctAnswer);
      $('#image').html("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,3000);
      } else {
          setTimeout(game.nextQuestion,3000);
      }       
    },

                    //updating score board from game with each possible result.
      results: function() {
      clearInterval(timer);
      $('#wrapper').html("Game Over");
      $('#wrapper').append("<h3>Correct: "+game.correct +"</h3>");
      $('#wrapper').append("<h3>Incorrect: "+game.incorrect +"</h3>");
      $('#wrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
      $('#wrapper').append("<button id='reset'>Reset");
      $("#image").html("");
     },

      clicked: function(e) {
      clearInterval(timer);
      if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
      game.correctAnswer();
      } else {
        game.wrongAnswer();
      }
    },     

      reset: function() {
      game.currentQuestion = 0;
      game.counter = 10;
      game.correct = 0;
      game.incorrect = 0;
      game.unanswered = 0;
      game.loadQuestion();
      $("#image").html("");
      }
    }
  })

    