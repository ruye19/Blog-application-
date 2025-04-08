import mysql2 from 'mysql2'


export const database=mysql2.createConnection({
    host:"localhost",
    user:"uta",
    password:"creast314629",
    database:"blog"
})

database.connect((err)=>{
    if(err) throw err
    console.log("Connected to database")
})

