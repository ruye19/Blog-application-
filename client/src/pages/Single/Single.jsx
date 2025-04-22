import React, { useContext, useEffect, useState } from 'react'
import './Single.css'
import imagee from '../../assets/1.jpg'
import banner from "../../assets/danica-hennig-tConYoO-ouU-unsplash.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Menu from '../../component/Menu/Menu'
import { AuthContext } from '../../component/context/authContext.jsx'

// Usage:

// Usage:

const single = () => {
 const [post, setPost] = useState([])
 
    const location  =useLocation();
    const navigator = useNavigate();

    const postid =location.pathname.split("/")[2]

    const {currentUser} = useContext(AuthContext)
 
    useEffect(() => {
      const fetchData = async()=>{
        try {
         const res = await axios.get(`http://localhost:5500/api/post/posts${postid}`)
         setPost(res.data)
        } catch (error) {
         console.log(error.mesaage)
         res.send(error)
        }
        fetchData()
      }
    }, [postid])

    const handle_delet = async ()=>{
      try {
        await axios.get(`http://localhost:5500/api/post/posts${postid}`)
        navigator("/")
      } catch (error) {
        console.log(error)

      }
    }

    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html,"text/html")
      return doc.body.textContent
  }
  

  return (
    <div className="single">
      <div className="content">
        <img className='content_img' src={`../upload/${post?.img}`} alt='posted image of the user' />
        
        <div className="user">
          {post.userImage && <img src={post.userImage}  alt="User profile" />}
          
          <div className="user_info">
            <span className="user__name">{post.username}</span>
            <p className="user__date">Posted {moment(post.data).fromNow()}  </p>
           
            {/* Added profile description */}
            <div className="user__description">
                <h1>{post.title}</h1>
               {getText(post.content)}
            </div>
          </div>
          
          {currentUser.username ===post.username && <div className="edit_delete">
            <div className="bothcorrect">
              <Link onClick={handel_edit } to={`/write?edit=4`} state={post}>
                  <PencilIcon className="h-5 w-5" />
              </Link> 
              <TrashIcon className="h-5 w-5"  onClick={handle_delet} />
            </div>
          </div>}
        </div>
        
       
      </div>
      
      <div className="menu">
        <Menu cat={post.catagory} />
      </div>
    </div>
  )
}

export default single
