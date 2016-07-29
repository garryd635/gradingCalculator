
if(Meteor.isClient){
	
	
	Template.assignmentForm.events({
		'click .jumbotron': function(events){
			window.location.href = '/index';
		},

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
		'click .btn-danger':function(events){
			var curId = events.currentTarget.value;

			gradeCollection.remove({_id:curId})
			$(events.currentTarget).closest('tr').remove()
		},

		'click #hw-submit': function(events){

			if($('#homework-name').val() == ""){
				alert("*** Homework Name Required ***");
				return
			}
			if($('#homework-grade').val() == "" && ($('hw-score-numerator').val() == "" && $('hw-score-denominator').val() == "")){
				alert("*** Homework Grade Required ***");
				return
			}
			if(isNaN($('#homework-grade').val())){
				alert("*** Grade Should Be a Number ***");
				return
			}

			if($('#homework-grade').val() == "" && ($('hw-score-numerator').val() != "" && $('hw-score-denominator').val() == "")){
				alert("***Grade Fraction is missing denominator***");
				return
			}

			if($('#homework-grade').val() == "" && ($('hw-score-numerator').val() == "" && $('hw-score-denominator').val() != "")){
				alert("Grade Fraction is missing numerator");
				return
			}

			if($('#homework-grade').val() != "" && ($('hw-score-numerator').val() != "" || $('hw-score-denominator').val() != "")){
				alert("***Grade should be either a percent or score***");
				return
			}
			if($('#hw-score-numerator').val() > $('#hw-score-denominator').val()){
				alert("***The score fraction should not be more than 1.  Please do not put extra credit***");
				return
			}

			if($('#hw-score-numerator').val() <= $('#hw-score-denominator').val()){
				alert("***Fraction Score is good*** (Not submited)");
				return
			}
			var name = $('#homework-name').val();
			var grade = parseInt($('#homework-grade').val())

			var GradetoInsert = {
				type:"homework",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

			$('#hw-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#quiz-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}

			var name = $('#quiz-name').val()
			var grade = parseInt($('#quiz-grade').val())

			var GradetoInsert = {
				type:"quiz",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

			$('#quiz-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#exam-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}
			var name = $('#exam-name').val()
			var grade = parseInt($('#exam-grade').val())

			var GradetoInsert = {
				type:"exam",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

				$('#exam-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#midterm-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}

			var name = $('#midterm-name').val()
			var grade = parseInt($('#midterm-grade').val())

			var GradetoInsert = {
				type:"midterm",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

			$('#midterm-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#final-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}

			var name = $('#final-name').val()
			var grade = parseInt($('#final-grade').val())

			var GradetoInsert = {
				type:"final",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});
				
				$('#final-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#other1-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}
			var name = $('#other1-name').val()
			var grade = parseInt($('#other1-grade').val())

			var GradetoInsert = {
				type:"other1",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

				
				$('#other1-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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
			if(isNaN($('#other2-grade').val())){
				alert("*** Grade Should Be a Number ***")
				return
			}
			var name = $('#other2-name').val()
			var grade = parseInt($('#other2-grade').val())

			var GradetoInsert = {
				type:"other2",
				name: name,
				grade:grade
			}
			btnId = gradeCollection.insert(GradetoInsert, function(err,docsInserted){
					return docsInserted;
				});

			$('#other2-table').append('<tr><td>' + name + '</td><td>' + grade + '</td><td> <button type="button" class="btn btn-danger" value="' + btnId+'" >Delete</button></td></tr>')
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

			if(gradeCollection.find({name:"homework"}).count() > 0){
				focus.push("homework");
				if(gradeCollection.find({type:"homework"}).count() == 0){
					gradeCollection.insert({
						type: "homework",
						name: "Assumption",
						grade: "100"
					})
				}
			}

			if(gradeCollection.find({name: "quiz"}).count() > 0){
				focus.push("quiz");
				if(gradeCollection.find({type:"quiz"}).count() == 0){
					gradeCollection.insert({
						type: "quiz",
						name: "Assumption",
						grade: "100"
					})
				}
			}
			if(gradeCollection.find({name: "exam"}).count() > 0){
				focus.push("exam");
				if(gradeCollection.find({type:"exam"}).count() == 0){
					gradeCollection.insert({
						type: "exam",
						name: "Assumption",
						grade: "100"
					})
				}
			}
			if(gradeCollection.find({name: "midterm"}).count() > 0){
				focus.push("midterm");
				if(gradeCollection.find({type:"midterm"}).count() == 0){
					gradeCollection.insert({
						type: "midterm",
						name: "Assumption",
						grade: "100"
					})
				}
			}
			if(gradeCollection.find({name: "final"}).count() > 0){
				focus.push("final");
				if(gradeCollection.find({type:"final"}).count() == 0){
					gradeCollection.insert({
						type: "final",
						name: "Assumption",
						grade: "100"
					})
				}
			}
			if(gradeCollection.find({name: "other1"}).count() > 0){
				focus.push("other1");
				if(gradeCollection.find({type:"other1"}).count() == 0){
					gradeCollection.insert({
						type: "other1",
						name: "Assumption",
						grade: "100"
					})
				}
			}
			if(gradeCollection.find({name: "other2"}).count() > 0){
				focus.push("other2");
				if(gradeCollection.find({type:"other2"}).count() == 0){
					gradeCollection.insert({
						type: "other2",
						name: "Assumption",
						grade: "100"
					})
				}
			}


			/**
				Going through each assignment type in the focus array and storing all assignments of the 
				current focus assignment type into an array called temp.  From there it will start another the inner for-loop that 
				iterate through the temp array to calculate the total of all present assignments according to the "focus" of the first for-loop
				.  
				For example, if focus contains [homework,quiz] and i = 0, temp will be an array of all the assignments that are type "homework"
				 and the inner for-loop will only satify the if-statement containing "homework"
			*/
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

				/**
					After adding all the assignments in the temp array, the average and grade weight will be
					calculated.  Depending on the focus, the average will be calculated by the assignment totals
					from the inner for-loop, retrieve the assignment type's grade weight percentage,
					and multiply the average with the percentage to obtain a grade weight of the specific assignment
					type.
				*/
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

			//Adds all grade weights to create a total percentage
			var absolutePercent = (hwNum + quizNum + examNum
				+ midtermNum + finalNum + other1Num + other2Num);
			
			$('#score span').html(" "+absolutePercent + "%");
			$('#results-modal').modal();
		},
		'click #restart-button': function(events){
			$('results-modal').hide();
			window.location.href = "/";
		},
		'click #info-button':function(events){
			$('#assign-info-modal').modal();
		}
	})
}