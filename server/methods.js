Meteor.methods({
	removeGrades: function(){
		gradeCollection.remove({})
	},

	addInputForm: function(id, name){
		$(id).append(
			'<div class="row">\
				<div class="col-xs-6">\
					<div class="form-group" id="' + name + '-section">\
						<label class="control-label">Homework</label>\
						<input type="text" class="form-group" id="' + name + '-name">\
						<input type="text" class="form-group" id="' + name + '-grade">\
						<button class="btn btn-default" id="' + name + '-submit">Submit</button>\
					</div>\
				</div>\
			</div>'
		)}
})