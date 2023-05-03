import { Router } from "express";

import {getAnimes, postAnime, putAnime, deleteAnime, getAnime} from '../controllers/anime.controller.js' 

const router = Router()

router.get('/anime', getAnimes);

router.get('/anime/:id', getAnime);

router.post('/anime', postAnime)

router.put('/anime/:id', putAnime)  //Para actualizar todos los datos

router.patch('/anime/:id', putAnime) //Para actualizar algunos datos de la tabla

router.delete('/anime/:id', deleteAnime)


export default router

