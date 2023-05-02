import {pool} from '../db.js';

export const indexanime = async (req, res)=>{
    const [result] = await pool.query('SELECT * from anime')
   res.json(result)
}