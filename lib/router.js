Router.route('/',function (){
  this.render('index');
});
Router.route('/gradingCriteria', function () {
  this.render('gradingCriteriaForm');
});
Router.route('/assignmentForm', function () {
  this.render('assignmentForm');
});