import React from 'react'
import './Menu.css'
import { Link } from 'react-router'

const Menu = () => {
    const posts=[
        {
          img:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          title:"Hiking Ethipoian  mountains",   
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
          id:1  
    
        },
        {
          img:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          title:"Hiking Ethipoian  mountains",   
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
          id:2 
    
        },
        {
          img:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          title:"Hiking Ethipoian  mountains",   
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
          id:3 
        }
      ]
  return (
    <div className='menu'>
      <h1>other posts you may like</h1>
      {
        posts.map((post)=>(
            <div className="postts" key={post.id}>
                <img src={post.img} alt="post images" />
                <h3>{post.title}</h3>
                <button> <Link to={`/`}>read more</Link> </button>
            </div>
        ))
      }
    </div>
  )
}

export default Menu
