import { database } from "../db.js";
import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"


//register
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


// login 
export const login  =(req,res)=>{
  const q = "SELECT * FROM users WHERE username = '?':"
  db.query(q,[req.body.username ],(err,data)=>{
    if(err) return res.json(err);
    if(data.length ===0 )return res.status(404).json("msg : user not found ")
          //check password 
    const passwordright =bycrpt.compareSync(req.body.password,data[0].password);
    if (!passwordright) return res.status(400).json("password not correct ")
     
    const   token =jwt.sign({id: data[0].id},"jwtkey")
    const {password, ...other}=data[0]

    res.cookie("access_token ", token ,{
      httpOnly: true
        }).status(200).json(other)
  }) 

}
//  logOut
export const logout =(req,res)=>{
   res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
   }).status(200).json("user has log out ")
  }