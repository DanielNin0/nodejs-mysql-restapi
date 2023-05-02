import { json } from "express";
import { pool } from "../db.js";

export const getAnimes= async (req, res)=>{
    try {
        const [result] = await pool.query('SELECT * from anime')
        res.json(result)
    } catch (error) {
        return res.estatus(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const postAnime= async(req, res)=> {
    const {nombre, tipo, sinopsis, fecha_lanzamiento, creador, estudio_animacion, imagen} = req.body
    try {
        
    const[rows]=await pool.query('INSERT INTO anime (nombre, tipo, sinopsis, fecha_lanzamiento, creador, estudio_animacion, imagen) VALUES (?,?,?,?,?,?,?)', 
    [nombre, tipo, sinopsis, fecha_lanzamiento, creador, estudio_animacion, imagen])
    res.send({
        id: rows.insertId,
        nombre,
        tipo, 
        sinopsis, 
        fecha_lanzamiento, 
        creador, 
        estudio_animacion, 
        imagen

    })
    } catch (error) {
        return res.estatus(500).json({
            message: 'Algo salio mal'
        })
}
}

export const getAnime = async (req, res)=>{

   try {
    const [rows] = await pool.query('SELECT * FROM anime WHERE anime_id = ?', [req.params.id])
    
    if(rows <= 0) return res.status(404).json({
        message: 'Anime no encontrado'
    })
    res.json(rows[0])
   } catch (error) {
    return res.estatus(500).json({
        message: 'Algo salio mal'
    })
   }
}



export const deleteAnime= async (req, res)=> {
   try {
    const [rows] = await pool.query('DELETE FROM anime WHERE anime_id = ?', [req.params.id])
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: 'Anime no encontrado'
    })
    res.sendStatus(204)
   } catch (error) {
    return res.estatus(500).json({
        message: 'Algo salio mal'
    })
   }
}

export const putAnime= async (req, res)=> {
    const {id} = req.params
    const {nombre,
        tipo, 
        sinopsis, 
        fecha_lanzamiento, 
        creador, 
        estudio_animacion, 
        imagen} = req.body

        try {
            const [result] = await pool.query('UPDATE anime SET nombre = ?, tipo = ?, sinopsis = ?, fecha_lanzamiento = ?, creador = ?, estudio_animacion = ?, imagen = ? WHERE anime_id = ?', [nombre,
                tipo, 
                sinopsis, 
                fecha_lanzamiento, 
                creador, 
                estudio_animacion, 
                imagen, id])
    
                if(result.affectedRows === 0) return res.status(404).json({
                    message: 'Anime no encontrado'
                })
               
                const [rows] = await pool.query('SELECT * FROM anime WHERE anime_id = ?',[id])
                res.json(rows[0])
    
    
                // Para actualizar algunos datos de la tabla con PATCH
                // const [result] = await pool.query('UPDATE anime SET nombre = IFNULL(?, nombre), tipo = IFNULL(?, tipo), sinopsis = IFNULL(?, sinopsis), fecha_lanzamiento = ?, creador = ?, estudio_animacion = ?, imagen = ? WHERE anime_id = ?', [nombre,
                //     tipo, 
                //     sinopsis, 
                //     fecha_lanzamiento, 
                //     creador, 
                //     estudio_animacion, 
                //     imagen, id])  
        } catch (error) {
            return res.estatus(500).json({
                message: 'Algo salio mal'
            })
        }
}