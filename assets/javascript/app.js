      $(document).ready(function(){ 
              // game start, get rid of start button from page, mouse click //
      $("#start").on("click", function(){
        $("#start").remove();
          game.loadQuestion();
    })
              // events here, did not know to use(e)!!!!!!!!!!!
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
      
    },{
  
      question: "Which European country hosts the annual music festival Tomorrowland?",
      answers: ["Germany", "Belgium","Denmark", "Greece"],
      correctAnswer: "Belgium",
      image: "assets/images.gif"
    },{
  
      question: "Which band realeased the album Abbey Road?",
      answers: ["The Monkees", "The Rolling Stones","Pink Floyd", "The Beatles"],
      correctAnswer: "The Beatles",
      image: "assets/images/anthony_kiedis.gif"
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
      
      question: "What band does David Grohl lead sing for?",
      answers: ["Rage Against the Machine", "Snow Patrol","Imagine Dragons","Foo Fighters"],
      correctAnswer: "Foo Fighters",
      image: "assets/image.gif"
    },{
        
      question: "Which latin artist is known as Mr. World Wide?",
      answers: ["Pitbull", "Julio Iglesias", "Marc Anthony", "Santana"],
      correctAnswer: "Pitbull",
      image: "assets/image.gif"
    },{

      question: "Which band headlined for Super Bowl LIII?",
      answers: ["Justin Timberlake","Travis Scott", "Maroon 5", "Coldplay"],
      correctAnswer: "Maroon 5",
      image: "assets,image.gif"
    }];  
    
        //clearing variables for scoring //
  var game = {
      questions: questions,
      currentQuestion:0,
      counter:10,
      correct:0,
      incorrect:0,
      unanswered:0,

      countdown: function(){
      game.counter--;
      $("#counter").text(game.counter);
      if(game.counter<=0){
      // console.log(game over!");
      game.timeUp();
      }
    },

      loadQuestion: function(){
      timer = setInterval(game.countdown,1000);
      $('#subwrapper').text("Time Remaining +<span id=counter>10</span> Seconds")
      $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question +'</h2>');
      for(var i=0; i<questions[game.currentQuestion].answers.length; i++){
      $('#subwrapper').append('<button class="answer-button" id="button-'+i+'"data-name="'+questions[game.currentQuestion].answers[i] +'">'+questions[game.currentQuestion].answers[i]+'</button>');
      }
      },

      nextQuestion: function() {
      game.counter = 10;
      $('#counter').text(game.counter);
      $("#image").text("");
      game.currentQuestion++;
      game.loadQuestion();
    },

      timeUp: function() {
      clearInterval(timer);
      game.unanswered++;
      $('#subwrapper').text('Time is Up!');
      $('#subwrapper').append('The correct answer is: ' +questions[game.currentQuestion].correctAnswer);
      $('#image').text("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,2000);
      } else {
          setTimeout(game.nextQuestion,2000);
      }       
    },

      results: function() {
      clearInterval(timer);
      $('#subwrapper').text("Game Over");
      $('#subwrapper').append("<h3>Correct: "+game.correct +"</h3>");
      $('#subwrapper').append("<h3>Incorrect: "+game.incorrect +"</h3>");
      $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
      $('#subwrapper').append("<button id='reset'>Reset");
      $("#image").text("");
  
   },
      clicked: function(e) {
      clearInterval(timer);
      if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
      game.answeredCorrectly();
      } else {
        game.answeredIncorrectly();
      }

    },

      answeredCorrectly: function() {
      console.log("correct");
      clearInterval(timer);
      game.correct++;
      $('#subwrapper').text("Correct! You Rock!!!");
      $('#image').text("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,2000);
      } else {
          setTimeout(game.nextQuestion,2000);
      }
    },

      answeredIncorrectly: function() {
      // console.log("WRONG!");
      clearInterval(timer);
      game.incorrect++;
      $('#subwrapper').text("Wrong Answer!");
      $('#subwrapper').append('<h3>The correct answer is: ' +questions[game.currentQuestion].correctAnswer+ '</h3>');
      $('#image').text("<img src='" + questions[game.currentQuestion].image + "'/>");
      if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,2000);
      } else {
          setTimeout(game.nextQuestion,2000);
      }
    },

      reset: function() {
      game.currentQuestion = 0;
      game.counter = 10;
      game.correct = 0;
      game.incorrect = 0;
      game.unanswered = 0;
      game.loadQuestion();
      $("#image").text("");
      }
    }
  })

    