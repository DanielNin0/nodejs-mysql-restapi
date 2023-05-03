import { pool } from "../db.js";


export const getuser = async (req, res)=>{
    const [result] = await pool.query('SELECT * from usuarios')
   res.json(result)
}

export const postuser = async(req, res)=>{
    const {nombre, correo_electronico, password, imagen} = req.body
    const now = new Date()
    const year= now.getFullYear();
    const month = now.getMonth()
    const day = now.getDay()
    const fecha = `${year}-${month}-${day}`

try {
    const [rows] = await pool.query('INSERT INTO usuarios (nombre, correo_electronico, password, fecha_registro, imagen) VALUES (?,?,?,?,?)',
    [nombre, correo_electronico, password, fecha, imagen]) 
    res.send({
        nombre,
        correo_electronico, 
        password, 
        fecha,
        imagen

    })
} catch (error) {
    return res.estatus(500).json({
        message: 'Algo salio mal'
    })
}


   
}