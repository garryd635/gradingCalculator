
if (Meteor.isClient){
	
Template.gradingCriteriaForm.onRendered( function(){
	
})

Template.gradingCriteriaForm.events({	
			'click #update-button' : function(){

			},

		 'click #submit-button': function(){
		 	var homeworkPercent = parseInt($('#homework-input').val());
		 	var quizPercent = parseInt($('#quiz-input').val());
			var examPercent = parseInt($('#exam-input').val());
			var midtermPercent = parseInt($('#midterm-input').val());
			var finalPercent = parseInt($('#final-input').val());
			var other1Percent = parseInt($('#other1-input').val());
			var other2Percent = parseInt($('#other2-input').val());
			var empty = false;
			var total = 0;

			percentArr = [homeworkPercent,quizPercent,examPercent,midtermPercent, finalPercent, other1Percent,other2Percent];

			for (var i = 0; i < percentArr.length; i++) {
				if (percentArr[i] != 0){
					total += percentArr[i];
				}
			};

			console.log(percentArr);

			if(total != 100){
				console.log("Not 100%");
				console.log(total);
				$('#percentage-error percentage-text').html(total);
				$('#percentage-error').fadeIn("slow");
			}	
			else{
				$('#percentage-error').hide();

				if(homeworkPercent != 0){
					gradeCollection.insert({
						type: "percentage",
						name:"homework",
						percent: homeworkPercent
					});
				}

				if(quizPercent != 0){
					gradeCollection.insert({
						type: "percentage",
						name:"quiz",
						percent: quizPercent
					});
				}

				if(examPercent != 0){
					gradeCollection.insert({
						type: "percentage",
						name:"exam",
						percent: examPercent
					});
				}

				if(midtermPercent != 0){
					gradeCollection.insert({
						type: "percentage",
						name:"midterm",
						percent: midtermPercent
					});
				}

				if(finalPercent != 0){
					gradeCollection.insert({
						type: "percentage",
						name: "final",
						percent: finalPercent
					});
				}

				if(other1Percent != 0){
					gradeCollection.insert({
						type: "percentage",
						name:"other1",
						percent: other1Percent
					});
				}

				if(other2Percent != 0){
					gradeCollection.inset({
						type: "percentage",
						name:"other2",
						percent: other2Percent
					});
				}
			}
			$('#hw-div').show();
			window.location.href = "/assignmentForm";
    }
	})	
}
