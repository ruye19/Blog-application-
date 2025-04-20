import  {database}  from "../db.js"
export const getposts = (req,res)=>{
    const q = req.body.catagory? 
    "SELECT * FROM catagory=? " :
     "SELECET * FROM posts"

    database.query(q,[req.body.catagory], (err,data) =>{
        if (err) return res.send(err)
        
        return res.status(200).json(data)
})
}
export const getpost = (req,res)=>{
    res.json("yeah arif ")
}
export const addpost = (req,res)=>{
    res.json("yeah arif ")
}
export const deletePost = (req,res)=>{
    res.json("yeah arif ")
}
export const updatePost = (req,res)=>{
    res.json("yeah arif ")
}