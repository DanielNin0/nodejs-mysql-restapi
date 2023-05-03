import express from 'express';
import indexRoutes from './routers/index.routes.js';
import animeRoutes from './routers/anime.routes.js';
import userRoutes from './routers/user.routes.js'




const app =express();

app.use(express.json())

app.use('/api', animeRoutes)
app.use('/api', indexRoutes)
app.use('/api', userRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Pagina no encontrada'
    })
})

export default app;