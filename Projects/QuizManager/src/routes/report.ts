import express from 'express';
import { getReport } from '../controllers/report';

import { isAuthenticated } from '../middlewares/isAuth';

const router=express.Router();



//GET/report
router.get("/:reportId?",isAuthenticated,getReport); //optional parameter

export default router;

