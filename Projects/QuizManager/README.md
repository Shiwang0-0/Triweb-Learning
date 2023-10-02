 # Description
This directory includes project of QuizManager App.
 ##### QuizManager
 A Quiz App perfoming following tasks:
- CRUD operations on user.
- CRUD operations on Quiz.
- Creating Report of the Quiz.
- Authentication and Authorization of user.

##### Installation
In the Dependencies section of Package.json find all the dependies used and install accordingly.
- yarn add mongoose
- yarn add Nodemon
- yarn add express-validator
- yarn add typescript
- yarn add @types/node
- yarn add bcrypt

##### Scripts
 -- "start":To run App.js.
 -- "start:dev": To run nodemon.
 -- "start:ts": To run ts-node.


#### Server Connection

To Create User
localhost:3000/auth/ - to register the user.
localhost:3000/auth/login - to login the user.
localhost:3000/user/:userId - to get the user.
localhost:3000/user/ - to update the user.

To Create Quiz
localhost:3000/quiz/ - to create a quiz.
localhost:3000/quiz/quizId? - to get a quiz.
localhost:3000/quiz/quizId - to delete a quiz.
localhost:3000/quiz/publish - to publish a quiz.

To attempt Exam
localhost:3000/exam/quizId -to get Quiz.
localhost:3000/exam/ - to submit the exam.

To get Report
localhost:3000/report/reportId? - to get the Report.
