if(Meteor.isClient){

	Template.assignmentForm.events({
		'click #hw-submit': function(events){
			gradeCollection.insert({
				type:"assignment"
				name:$('#homework-name').val()
				grade:$('#homework-grade').val()
			})
			alert($('#homework-name').val() + " added.")
			$('#homework-name').val("")
			$('#homework-grade').val("")
		}

		'click #quiz-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#quiz-name').val()
				grade:$('#quiz-grade').val()
			})
		}
		'click #exam-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#exam-name').val()
				grade:$('#exam-grade').val()
			})
		}
		'click #midterm-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#midterm-name').val()
				grade:$('#midterm-grade').val()
			})
		}
		'click #final-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#final-name').val()
				grade:$('#final-grade').val()
			})
		}
		'click #other1-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#other1-name').val()
				grade:$('#other1-grade').val()
			})
		}
		'click #other2-submit': function(events){
			gradeCollection.insert({
				type: "assignment"
				name:$('#other2-name').val()
				grade:$('#other2-grade').val()
			})
		}
	})
}