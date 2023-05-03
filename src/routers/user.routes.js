import { Router } from "express";
import { getuser, postuser} from '../controllers/user.controller.js';

const router = Router()

router.get('/user', getuser);

router.post('/user', postuser)


export default router