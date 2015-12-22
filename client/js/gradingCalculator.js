if (Meteor.isClient) {

  Template.index.events({
    'click button': function () {
    	Meteor.call("removeGrades");
    	$('#percentage-error').hide()
    }
  });
}


