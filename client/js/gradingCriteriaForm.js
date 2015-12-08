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
	console.log("Start up")
});
	
Template.gradingCriteriaForm.onRendered( function(){
	// $('#homework-input').hide()
	// $('#quiz-input').hide()
	// $('#exam-input').hide()
	// $('#midterm-input').hide()
	// $('#final-input').hide()
	// $('#other1-input').hide()
	// $('#other2-input').hide()

	// $('#homework-label').hide()
	// $('#quiz-label').hide()
	// $('#exam-label').hide()
	// $('#midterm-label').hide()
	// $('#final-label').hide()
	// $('#other1-label').hide()
	// $('#other2-label').hide()
})

Template.gradingCriteriaForm.events({	
			'click #update-button' : function(){

			},

		 'click #submit-button': function(){
		 	var homeworkPercent = parseInt($('#homework-input').val())
		 	var quizPercent = parseInt($('#quiz-input').val())
			var examPercent = parseInt($('#exam-input').val())
			var midtermPercent = parseInt($('#midterm-input').val())
			var finalPercent = parseInt($('#final-input').val())
			var other1Percent = parseInt($('#other1-input').val())
			var other2Percent = parseInt($('#other2-input').val())

			var total = (homeworkPercent+quizPercent+examPercent+midtermPercent+
				finalPercent+other1Percent+other2Percent)
			console.log(total);

			if(total != 100){
				console.log("Not 100%")
				console.log(total)
				$('#percentage-error percentage-text').html(total)
				$('#percentage-error').fadeIn("slow")
			}	
			else{
				$('#percentage-error').hide()

				var criteria = [
				{
					name: "hwPercent",
					percentage: homeworkPercent

				},
					
						{
							name: "quizPercent",
						percentage: quizPercent
					},

					 {
					 	name: "examPercent",
						percentage: examPercent
					 },
						
					 {
					 	name: "midtermPercent",
						percentage: midtermPercent
					 },
					  {
					  name: "finalPercent",
						percentage: finalPercent	
					  },
						
					  {
					  	name: "other1Percent",
						percentage: other1Percent
					  },

					  {
					  	name: "other2Percent",
						percentage: other2Percent
					  }			
				];
				
				_.each(criteria, function(grades){
					gradeCollection.insert(grades)
				});

				window.location.href = "/assignmentForm";
			}

    }
	})	
}
