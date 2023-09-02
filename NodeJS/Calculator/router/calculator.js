const express=require('express'); 
const calculator_controller= require('../controller/calculator')
const router =express.Router();

//we create a path to access different function of the calculator,that path goes through "calculator" to avoid any unnecessary confusion between two function with same name which we made for different purpose.
// 3030:calculator/add and 3030:user/add are two different things so to divide the, calculator and user folders are necessary.


//router.post('the url you want to hit',the functionality you want to give);

router.post('/add',calculator_controller.add);
router.post('/subtract',calculator_controller.subtract);
router.post('/multiply',calculator_controller.multiply);
router.post('/divide',calculator_controller.divide);

module.exports=router; //export this router to app.js