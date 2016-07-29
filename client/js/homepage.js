if(Meteor.isClient){
	Template.homepage.events({
		'click #quick-grade': function(events){
			window.location.href = '/index'
		}
	})
}