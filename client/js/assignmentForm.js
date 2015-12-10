if(Meteor.isClient){

	Template.assignmentForm.events({
		'click #hw-submit': function(events){

			if($('#homework-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type:"homework",
				name:$('#homework-name').val(),
				grade:parseInt($('#homework-grade').val())
			})
			alert($('#homework-name').val() + " added.")
			$('#homework-name').val("")
			$('#homework-grade').val("")
			}	
		},

		'click #quiz-submit': function(events){
			if($('#quiz-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "quiz",
				name:$('#quiz-name').val(),
				grade:$('#quiz-grade').val()
			})
			alert($('#quiz-name').val() + " added.")
			$('#quiz-name').val("")
			$('#quiz-grade').val("")
			}
			
		},
		'click #exam-submit': function(events){
			if($('#exam-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "exam",
				name:$('#exam-name').val(),
				grade:$('#exam-grade').val()
			})
				alert($('#exam-name').val() + " added.")
				$('#exam-name').val("")
				$('#exam-grade').val("")
			}
			
		},
		'click #midterm-submit': function(events){
			if($('#midterm-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "midterm",
				name:$('#midterm-name').val(),
				grade:$('#midterm-grade').val()
			})
				alert($('#midterm-name').val() + " added.")
				$('#midterm-name').val("")
				$('#midterm-grade').val("")
			}
			
		},
		'click #final-submit': function(events){
			if($('#final-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "final",
				name:$('#final-name').val(),
				grade:$('#final-grade').val()
			})
				alert($('#final-name').val() + " added.")
				$('#final-name').val("")
				$('#final-grade').val("")
			}
			
		},
		'click #other1-submit': function(events){
			if($('#other1-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "other1",
				name:$('#other1-name').val(),
				grade:$('#other1-grade').val()
			})
				alert($('#other1-name').val() + " added.")
				$('#other1-name').val("")
				$('#other1-grade').val("")
			}
			
		},
		'click #other2-submit': function(events){
			if($('#other2-name').val() == ""){
				console.log("Empty Name")
			}
			else{
				gradeCollection.insert({
				type: "other2",
				name:$('#other2-name').val(),
				grade:$('#other2-grade').val()
			})
				alert($('#other2-name').val() + " added.")
				$('#other2-name').val("")
				$('#other2-grade').val("")
			}
			
		}
	})
}