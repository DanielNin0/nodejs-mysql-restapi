import { Router } from "express";
import {indexanime} from '../controllers/index.controller.js'


const router = Router()

router.get('/indexprincipal', indexanime);


export default router

