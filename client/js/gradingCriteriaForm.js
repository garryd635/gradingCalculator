// Meteor.startup(function() {
// 	$('#percentage-error').hide()
// 	$('#submit-button').click(function(event) {
// 	event.preventDefault();
// 	// var homeworkPercent = $('#homework-input').val()
// 	// var quizPercent = $('#quiz-input').val()
// 	// var examPercent = $('#exam-input').val()

// 	// if((homeworkPercent + quizPercent + examPercent) == 100){
// 	// 	$('#percentage-error').fadeIn("slow")
// 	// }	
// 	});
// });



if (Meteor.isClient){

	Meteor.startup(function() {
	$('#percentage-error').hide()
	console.log("Start up")
});
	
	Template.gradingCriteriaForm.events({		
		 'click #submit-button': function(){
		 	var homeworkPercent = $('#homework-input').val()
		 	var quizPercent = $('#quiz-input').val()
			var examPercent = $('#exam-input').val()
			var total = $(homeworkPercent+quizPercent+examPercent)
			console.log(total)
			if(total != 100){
				console.log("Not 100%");
			}	
        console.log(homeworkPercent);

    }
	})	
}
