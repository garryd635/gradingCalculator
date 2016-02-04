# The Course Grading Calculator

##Project Description
  Features:
  
    1.  Calculate an estimate of an overall grade in a course based off of Instructor's 
        assignment weight and assignments completed.
    2. Stores data using mongodb.
  
  Purpose:
  
      The purpose of the grading calculator is to allow students to be able to quickly 
    know the estimate of their overall grade in a class/course.  The application is targeted 
    towards students, whether they're college students, high school students, or even middle school
    students. The grading calculator was created as an individual project for A100.
    
  
  Running the Project:
  
      The Grading Calculator is a meteor app that is already deployed.  To access it
    go to http://garrydominique.meteor.com
    
##Status:
  Current:
  
      Current the application is able to calculate grades based on weighted criteria.  There are inputs
    available to type in grade weights for the common assignment types like Homework and Exams, and two 
    inputs named 'other' to assigned grades to assignment types not listed.  There are also inputs to put the 
    names and grades for assignment types with grade weights that already exists.
    
      The application also displays the assignments entered, but does not directly get it from the database.
    The program will allow you to delete assignments before calculations.  There is now a button to display
    instructions for filling out the displayed form.
  
  Known Bugs:
  
      Using the website for the first time, when you reach Assignments and click the continue button, the
    assignment fields do not appear.  If this occurs, click on the top yellow jumbotron to go back and repeat
    the process again.  It should work the second time.
    
  Next Steps:
  
      1. Have the assignments displayed directly from the db.
      2. Let the user go back to previous grade weight form to change grade weights.
