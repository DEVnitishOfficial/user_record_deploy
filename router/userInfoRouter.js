import { Router } from "express";

const router = Router();
import {submitForm, getUser} from "../controller/userInfoController.js";

router.post('/submitForm',submitForm)
router.get('/getUser/:fullName',getUser)


export default router