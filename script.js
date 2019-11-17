console.log("running");

var questions = [
	{question: "Which species of tree is the tallest?", correctAnswer: "Sequoia", answers: ["Pine","Evergreen","Oak"]},
	{question: "Which organisms on earth live the longest?", correctAnswer: "Trees", answers: ["Tortoises","Whales","Geoducks"]},
	{question: "On average, how much water can a large oak consume in a single day?", correctAnswer: "100 gallons", answers: ["75 gallons","150 gallons","50 gallons"]},
	{question: "How much carbon dioxide can a tree absorb in a year?", correctAnswer: "48 lbs", answers: ["28 lbs","61 lbs","73 lbs"]},
	{question: "What tree produces coconuts?", correctAnswer: "Palm Trees", answers: ["Maple Trees","Redwood Trees", "Villa Trees"]},
];
$(document).ready(function(){

	var currentQuestionIndex = 0;
	$(".question p").text(questions[0].question);
	var rand = Math.floor(Math.random() * (questions.length - 1));
	$(".answer" + rand +" p").text(questions[0].correctAnswer);
	var l = 0;
	for(var k = 0; k < 4; k++)
	{

		if(k == rand)
		{
			$(".answer" + rand +" p").text(questions[0].correctAnswer);		
		}
		else
		{
			$(".answer" + k +" p").text(questions[0].answers[l]);
			$(".answer" + k).addClass("wrong-answer");
			l++;
		}
	}

	var raining = false;
	var progress = 0;
	$(".answer").click(function(){
		if($(this).text() == questions[currentQuestionIndex].correctAnswer)
		{
			console.log("correct");
			var element = $(this);
			element.removeClass("answer");
			element.addClass("correct-answer-revealed");

			setTimeout(function(){
				if(currentQuestionIndex	< questions.length - 1)
				{
					currentQuestionIndex++;
				}else
				{
					currentQuestionIndex = 0;
				}
				setTimeout(function(){
					element.removeClass("correct-answer-revealed");
					element.addClass("answer");
					$(".wrong-answer").addClass("answer");
					$(".wrong-answer-revealed").removeClass("wrong-answer-revealed");
					$(".wrong-answer").removeClass("wrong-answer");
					$(".question p").text(questions[currentQuestionIndex].question);
					rand = Math.floor(Math.random() * (questions.length - 1));
					$(".answer" + rand +" p").text(questions[currentQuestionIndex].correctAnswer);
					var l = 0;
					for(var k = 0; k < 4; k++)
					{

						if(k == rand)
						{
							$(".answer" + rand +" p").text(questions[currentQuestionIndex].correctAnswer);		
						}
						else
						{
							$(".answer" + k +" p").text(questions[currentQuestionIndex].answers[l]);
							$(".answer" + k).addClass("wrong-answer");
							l++;
						}
					}


					$(".trivia-container").addClass("fade-in");
				}, 2100)

			}, 100);
		}
		else
		{
			console.log("wrong");
  			if(!$(this).hasClass("correct-answer")){
  		    		$(this).removeClass("answer");	
  		    		$(this).addClass("wrong-answer-revealed");
			}
		}
	});
  /*$(".correct-answer").click(function(){
  		$(".correct-answer").removeClass("answer");	
  		$(".correct-answer").addClass("correct-answer-revealed");
  		setTimeout(function(){
  			$(".trivia-container").addClass("fade-out");
  			if(currentQuestionIndex	< questions.length)
  			{
  				currentQuestionIndex++;
  			}else
  			{
  				currentQuestionIndex = 0;
  			}
  			setTimeout(function(){
			$(".correct-answer").removeClass("correct-answer-revealed");
  			$(".correct-answer").addClass("answer");
  			$(".correct-answer").removeClass("correct-answer");
  			$(".wrong-answer").addClass("answer");
  			$(".wrong-answer-revealed").removeClass("wrong-answer-revealed");
  			$(".wrong-answer").removeClass("wrong-answer");
  				$(".question p").text(questions[currentQuestionIndex].question);
			rand = Math.floor(Math.random() * (questions.length - 1));
			$(".answer" + rand +" p").text(questions[currentQuestionIndex].correctAnswer);
			var l = 0;
			for(var k = 0; k < 4; k++)
			{

				if(k == rand)
				{
					$(".answer" + rand +" p").text(questions[currentQuestionIndex].correctAnswer);
					$(".answer" + rand).addClass("correct-answer");			
				}
				else
				{
					$(".answer" + k +" p").text(questions[currentQuestionIndex].answers[l]);
					$(".answer" + k).addClass("wrong-answer");
					l++;
				}
			}
			$(".trivia-container").removeClass("fade-out");

			$(".trivia-container").addClass("fade-in");
  			}, 2100)
  			
  		}, 100);
  		
  });*/
/*  $(".wrong-answer").click(function(){
  		console.log("wrong");
  		if(!$(this).hasClass("correct-answer")){
  		$(this).removeClass("answer");	
  		$(this).addClass("wrong-answer-revealed");
  	}
  });*/
  $(".water").click(function(){
  	console.log(raining);
  	console.log("water clicked");
  	if(raining == false){
  		raining = true;
  		$(".rain").addClass("fade-in");
  		var elem = document.getElementById("animation");
  		var width = $('.tree').width();
  		var pos = 25;
  		elem.style.top = pos + 'px';
  		var id = setInterval(frame, 5);
  		$(".rain").removeClass("fade-out");
  		$(".rain").addClass("fade-in");
  		function frame() {
    		if (pos == 225) {
      			clearInterval(id);
      			$(".rain").removeClass("fade-in");
      			$(".rain").addClass("fade-out");
      			if(progress < 95)
      			{
      				
      				$('.tree').css({width:  (width + 1) + 'px'});
      				progress += 10;
      			}
      			else
      			{
      				
      				$('.tree').css({width:  '245px'});
      				progress = 0;
      			}
      			$("progress").attr("value", progress);
      			raining = false;
    		} else {
      			pos++;
      			elem.style.top = pos + 'px';
      
    		}

  		}
  	
  	}
	});

});