if(Meteor.isClient){
		 hwCounter = 0;
		 quizCounter = 0;
		 examCounter = 0;
		 midtermCounter = 0;
		 finalCounter = 0;
		 other1Counter = 0;
		 other2Counter = 0;

	Template.assignmentForm.events({
		'click #obtain-Input' :function(events){
			if((gradeCollection.find({name: 'homework'}).count()) > 0)
				$('#hw-div').show();

			if((gradeCollection.find({name: 'quiz'}).count()) > 0)
				$('#quiz-div').show();

			if((gradeCollection.find({name: 'exam'}).count()) > 0)
				$('#exam-div').show();

			if((gradeCollection.find({name: 'midterm'}).count()) > 0)
				$('#midterm-div').show();

			if((gradeCollection.find({name: 'final'}).count()) > 0)
				$('#final-div').show();

			if((gradeCollection.find({name: 'other1'}).count()) > 0)
				$('#other1-div').show();

			if((gradeCollection.find({name: 'other2'}).count()) > 0)
				$('#other2-div').show();

			$('#obtain-Input').hide();
			$('#calc-grade').show();
		},

		'click #hw-submit': function(events){

			var errorMsg = "Field Required"

			if($('#homework-name').val() == ""){
				alert("*** Homework Name Required ***")
				return
			}
			if($('#homework-grade').val() == ""){
				alert("*** Homework Grade Required ***")
				return
			}

			gradeCollection.insert({
				type:"homework",
				name:$('#homework-name').val(),
				grade:parseInt($('#homework-grade').val())
			});
			hwCounter++;
			alert($('#homework-name').val() + " added.");
			$('#homework-name').val("");
			$('#homework-grade').val("");
		},

		'click #quiz-submit': function(events){
			if($('#quiz-name').val() == ""){
				alert("*** Quiz Name Required ***")
				return
			}
			if($('#quiz-grade').val() == ""){
				alert("*** Quiz Grade Required ***")
				return
			}

			gradeCollection.insert({
				type: "quiz",
				name:$('#quiz-name').val(),
				grade:parseInt($('#quiz-grade').val())
			});
			quizCounter++;
			alert($('#quiz-name').val() + " added.");
			$('#quiz-name').val("");
			$('#quiz-grade').val("");
		},

		'click #exam-submit': function(events){
			if($('#exam-name').val() == ""){
				alert("*** Exam Name Required ***")
				return
			}
			if($('#exam-grade').val() == ""){
				alert("*** Exam Grade Required ***")
				return
			}

			gradeCollection.insert({
				type: "exam",
				name:$('#exam-name').val(),
				grade:parseInt($('#exam-grade').val())
			});
				examCounter++;
				alert($('#exam-name').val() + " added.");
				$('#exam-name').val("");
				$('#exam-grade').val("");
			
		},

		'click #midterm-submit': function(events){
			if($('#midterm-name').val() == ""){
				alert("*** Midterm Name Required ***")
				return
			}
			if($('#midterm-grade').val() == ""){
				alert("*** Midterm Grade Required ***")
				return
			}

			gradeCollection.insert({
				type: "midterm",
				name:$('#midterm-name').val(),
				grade:parseInt($('#midterm-grade').val())
			});

			midtermCounter++;
			alert($('#midterm-name').val() + " added.");
			$('#midterm-name').val("");
			$('#midterm-grade').val("");			
		},
		'click #final-submit': function(events){
			if($('#final-name').val() == ""){
				alert("*** Final Name Required ***")
				return
			}
			if($('#final-grade').val() == ""){
				alert("*** Final Grade Required ***")
				return
			}

				gradeCollection.insert({
				type: "final",
				name:$('#final-name').val(),
				grade:parseInt($('#final-grade').val())
			});
				finalCounter++;
				alert($('#final-name').val() + " added.");
				$('#final-name').val("");
				$('#final-grade').val("");
		},
		'click #other1-submit': function(events){
			if($('#other1-name').val() == ""){
				alert("*** Other1 Name Required ***");
				return
			}
			if($('#other1-grade').val() == ""){
				alert("*** Other1 Grade Required ***");
				return
			}
			gradeCollection.insert({
				type: "other1",
				name:$('#other1-name').val(),
				grade:parseInt($('#other1-grade').val())
			});

				other1Counter++
				alert($('#other1-name').val() + " added.");
				$('#other1-name').val("");
				$('#other1-grade').val("");
		},
		'click #other2-submit': function(events){
			if($('#other2-name').val() == ""){
				alert("*** Other2 Name Required ***");
				return
			}
			if($('#other2-grade').val() == ""){
				alert("*** Other2 Grade Required ***");
				return
			}

			gradeCollection.insert({
				type: "other2",
				name:$('#other2-name').val(),
				grade:parseInt($('#other2-grade').val())
			});

			other2Counter++;
			alert($('#other2-name').val() + " added.");
			$('#other2-name').val("");
			$('#other2-grade').val("");

			
		},

		'click #calc-grade': function(events){

			var focus = [];
			var hwNum = 0;
			var quizNum = 0;
			var examNum = 0;
			var midtermNum = 0;
			var finalNum = 0;
			var other1Num = 0;
			var other2Num = 0;

			var hwTotal = 0;
			var quizTotal = 0;
			var examTotal = 0;
			var midtermTotal = 0;
			var finalTotal = 0;
			var other1Total = 0;
			var other2Total = 0;

			var hwAvg = 0;
			var quizAvg = 0;
			var examAvg = 0;
			var midtermAvg = 0;
			var finalAvg = 0;
			var other1Avg = 0;
			var other2Avg = 0;

			if(hwCounter > 0){
				focus.push("homework");
				console.log("homework pushed");
			}
			if(quizCounter > 0){
				focus.push("quiz");
				console.log("quiz pushed");
			}
			if(examCounter > 0){
				focus.push("exam");
				console.log("exam pushed");
			}
			if(midtermCounter > 0){
				focus.push("midterm");
				console.log("midterm pushed");
			}
			if(finalCounter > 0){
				focus.push("final");
				console.log("final pushed");
			}
			if(other1Counter> 0){
				focus.push("other1");
				console.log("other1 pushed");
			}
			if(other2Counter > 0){
				focus.push("other2");
				console.log("other2 pushed");
			}

			console.log(focus);

			//--For Loop for Adding up total assignment percentage
			for (var i = 0; i < focus.length; i++) {
				var temp = gradeCollection.find({type:focus[i]}).fetch();
				for(var k = 0; k < temp.length; k++){
					if(focus[i] == "homework"){
					 hwTotal += temp[k].grade;
					}
					if(focus[i] == "quiz"){
						quizTotal += temp[k].grade;
					}
					if(focus[i] == "exam"){
						examTotal += temp[k].grade;
					}
					if(focus[i] == "midterm"){
						midtermTotal += temp[k].grade;
					}
					if(focus[i] == "final"){
						finalTotal += temp[k].grade;
					}
					if(focus[i] == "other1"){
						other1Total += temp[k].grade;
					}
					if(focus[i] == "other2"){
						other2Total += temp[k].grade;
					}
				}

				if(focus[i] == "homework"){
					 hwAvg = hwTotal/parseInt(temp.length);
					 var objectGet = gradeCollection.find({name:focus[i]}).fetch();
					 var critPercent = objectGet[0].percent;
					 hwNum = (hwAvg *(critPercent/100));
					}
					if(focus[i] == "quiz"){
						quizAvg = quizTotal/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						quizNum = (quizAvg *(critPercent/100));
						
					}
					if(focus[i] == "exam"){
						examAvg =	examTotal/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						examNum = (examAvg *(critPercent/100)); 
					}
					if(focus[i] == "midterm"){
						midtermAvg =  midtermTotal/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						midtermNum = (midtermAvg *(critPercent/100));
					}
					if(focus[i] == "final"){
						finalAvg =  finalTotal/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						finalNum = (finalAvg *(critPercent/100));
					}
					if(focus[i] == "other1"){
						other1Avg =  other1Total/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						other1Num = (other1Avg *(critPercent/100));
					}
					if(focus[i] == "other2"){
						other2Avg =  other2Total/parseInt(temp.length);
						var objectGet = gradeCollection.find({name:focus[i]}).fetch();
						var critPercent = objectGet[0].percent;
						other2Num = (other2Avg *(critPercent/100));
					}
			}//for

			var absolutePercent = (hwNum + quizNum + examNum
				+ midtermNum + finalNum + other1Num + other2Num);
			console.log("percent" + absolutePercent);

			$('#score span').html(" "+absolutePercent + "%");
			$('#results-modal').modal();
		},
		'click #restart-button': function(events){
			$('results-modal').hide();
			window.location.href = "/";
		}
	})
}