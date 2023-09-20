import   express  from "express";
const router=express.Router();
import { startExam,submitExam } from "../controllers/exam";
import {isAuthenticated} from '../middlewares/isAuth';



//GET /exam/quizId
router.get('/:quizId',isAuthenticated,startExam)


//POST /exam
router.post('/',isAuthenticated,submitExam)

export default router;