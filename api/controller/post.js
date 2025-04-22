import  {database}  from "../db.js"
import jwt from "jsonwebtoken"
export const getposts = (req,res)=>{
    const q = req.body.catagory? 
    "SELECT * FROM catagory=? " :
     "SELECET * FROM posts"

    database.query(q,[req.body.catagory], (err,data) =>{
        if (err) return res.status(500).send(err)
        
        return res.status(200).json(data)
})
}
export const getpost = (req,res)=>{
    const q = "SELECT p.id ,'username','title','description','p.img' u.img AS userImage,'created_at' FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? "

    database.query(q,[req.params.id],(err,data)=>{
        if (err) {
           return  res.status(500).json(err)
        }
        else{
            return res.status(200).json(data[0])
        }
    })
}
export const addpost = (req,res)=>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated")

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid")
  
        const q = "INSERT IMTO posts(`title ` ,`content` , `img`,`catag` ,`created_data`,`u.id`  ) VALUES (?)"

        const values=[
            req.body.title,
            req.body.content,
            req.body.img,
            req.body.catag,
            req.body.created_data,
            userInfo.id

        ]
  database.query(q,[values],(err,data))
{
  if(err) return res.status(500).json(err)


  return res.json("post has been created ")  

}    })
}

export const deletePost = (req,res)=>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated")

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid")

     const postId = req.params.id;
     const q ="DELETE FROM posts WHERE `id`=? AND  `uid`=? ";   
     

     database.query(q,[postId,userInfo.id],(err,data)=>{
        if(err) return res.status(403).json("you delete succesfully ")

        return res.status(200).json("the post has just deleted!")    
     })
    })

}
export const updatePost = (req,res)=>{
   const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated")

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid")
  
        const q = "UPDATE  posts SET `title=? ` ,`content=?` , `img=?`,`catag=?` WHERE `id` =? AND `uid`= ?"
        const postId= res.params.id
        const values=[
            req.body.title,
            req.body.content,
            req.body.img,
            req.body.catag,
            userInfo.id

        ]
  database.query(q,[...values, postId , userInfo.id],(err,data))
{
  if(err) return res.status(500).json(err)

    
  return res.json("post has been updated")  

}    })

}