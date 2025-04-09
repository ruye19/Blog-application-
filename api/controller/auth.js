import { database } from "../db.js";
import bycrpt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req,res)=>{
  const q = "SELECT * FOR users WHERE email = ? OR username = ?";
  const values = [req.body.email, req.body.username]

  database.query(q,[values],(err,data)=>{

    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("user alreay existed tell to login  ")


    const salt = bycrpt.genSaltSync(10)
    const hash = bycrpt.hashSync(req.body.password, salt)

    const q = "INSERT INTO users (username,email,password) VALUES (?,?,?)"
    const values = [req.body.username, req.body.email, hash]

    database.query(q,[values],(err,data)=>{
      if(err) return res.status(500).json(err)
      return res.status(200).json("user has been created successfully")
    })

  })
  
 

}

export const login  =(req,res)=>{
  res.json("login nicely ")
}

export const logout =(req,res)=>{
  res.json("logout")
}