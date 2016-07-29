Router.route('/',function (){
  this.render('homepage');
});
Router.route('/gradingCriteria', function () {
  this.render('gradingCriteriaForm');
});
Router.route('/assignmentForm', function () {
  this.render('assignmentForm');
});
Router.route('/index',function(){
	this.render('index');
});