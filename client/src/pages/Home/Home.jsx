import React from 'react'
import './Home.css'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"
import { useState,useEffect } from 'react'

const Home = () => {
   const [posts, setPosts] = useState([])

   const catag =useLocation().search

   useEffect(() => {
     const fetchData = async()=>{
       try {
        const res = await axios.get(`/posts${catag}`)
        setPosts(res.data)
       } catch (error) {
        console.log(error.mesaage)
        res.send(error)
       }
       fetchData()
     }
   }, [catag])


  // const posts=[
  //   {
  //     img:"https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title:"Hiking Ethipoian  mountains",   
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  //     id:1  

  //   },
  //   {
  //     img:"https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  //     title:"Hiking Ethipoian  mountains",   
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  //     id:2 

  //   },
  //   {
  //     img:"https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title:"Hiking Ethipoian  mountains",   
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  //     id:3 
  //   }
  // ]
  return (
    <div className="home">
      <div className="home__container">
        <h1>Welcome to the Author Bloggie</h1>
      </div>
      <hr />
     
    <div className="home__post">
    <div className="posts">
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <div className='post__img'>
                    <Link to={`/post/${post.id}`}><img src={post.img} alt="" /></Link>
                </div>
                <div className="post__info">
                    <Link className="post__title" to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.desc}</p>
                    <button className='btn__readmore'>Read More</button>
                </div>
            </div>
        ))}
    </div>
</div>
    </div>
   
  )
}

export default Home
