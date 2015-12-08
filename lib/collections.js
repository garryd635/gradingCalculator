gradeCollection = new Mongo.Collection('grades')

if(Meteor.isClient){
	Template.assignmentForm.events({
	'click #hw-submit': function(){
		let hwName = $('#homework-name').val()
		let hwGrade = $('#homework-grade').val()

		let assignment ={
			hwName: hwName,
			hwGrade: hwGrade
		}

		gradeCollection.insert(assignment)
		alert("added: " + assignment.hwName)
		$('#homework-name').val("")
		$('#homework-grade').val("")
	},

	'click #quiz-submit': function(){
		let quizName = $('#quiz-name').val()
		let quizGrade = $('#quiz-grade').val()

		let assignment ={
			hwName: hwName,
			hwGrade: hwGrade
		}

		gradeCollection.insert(assignment)
		alert("added: " + assignment.hwName)
		$('#quiz-name').val("")
		$('#quiz-grade').val("")
	}
	// 'click #exam-submit': function(){
	// 	let examName = $('#exam-name').val()
	// 	let examGrade = $('#exam-grade').val()

	// 	let assignment ={
	// 		hwName: hwName,
	// 		hwGrade: hwGrade
	// 	}

	// 	gradeCollection.insert(assignment)
	// 	alert("added: " + assignment.hwName)
	// 	$('#exam-name').val("")
	// 	$('#exam-grade').val("")
	// }
})
}
