if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

  Template.index.events({
    'click button': function () {
    	$('#percentage-error').hide()
    }
  });
}

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });

