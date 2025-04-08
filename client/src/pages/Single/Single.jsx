import React from 'react'
import './Single.css'
import imagee from '../../assets/1.jpg'
import banner from "../../assets/danica-hennig-tConYoO-ouU-unsplash.jpg"
import { Link } from 'react-router-dom'
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Menu from '../../component/Menu/Menu'

// Usage:

// Usage:

const single = () => {
  return (
    <div className="single">
      <div className="content">
        <img className='content_img' src={banner} alt='posted image of the user' />
        
        <div className="user">
          <img src={imagee} alt="User profile" />
          
          <div className="user_info">
            <span className="user__name">Ruth Yeshitla</span>
            <p className="user__date">Posted 2 days ago</p>
            
            {/* Added profile description */}
            <div className="user__description">
              <p>
                My plant collection began with a 'hard-to-kill' succulent from IKEA. 
                Now I run a jungle ICU where I whisper apologies to crispy calatheas 
                while singing 80s power ballads to my fiddle-leaf fig.

                My desert garden began with a single 'unkillable' cactus from Home Depot. 
    Now I operate a sandy sanctuary where I negotiate shade treaties between 
    sunburnt agaves and rebellious prickly pears, while my ocotillo waves 
    like a traffic conductor in the afternoon winds.
    My desert garden began with a single 'unkillable' cactus from Home Depot. 
    Now I operate a sandy sanctuary where I negotiate shade treaties between 
    sunburnt agaves and rebellious prickly pears, while my ocotillo waves 
    like a traffic conductor in the afternoon winds.

    My desert garden began with a single 'unkillable' cactus from Home Depot. 
    Now I operate a sandy sanctuary where I negotiate shade treaties between 
    sunburnt agaves and rebellious prickly pears, while my ocotillo waves 
    like a traffic conductor in the afternoon winds.

    My desert garden began with a single 'unkillable' cactus from Home Depot. 
    Now I operate a sandy sanctuary where I negotiate shade treaties between 
    sunburnt agaves and rebellious prickly pears, while my ocotillo waves 
    like a traffic conductor in the afternoon winds.

    My desert garden began with a single 'unkillable' cactus from Home Depot. 
    Now I operate a sandy sanctuary where I negotiate shade treaties between 
    sunburnt agaves and rebellious prickly pears, while my ocotillo waves 
    like a traffic conductor in the afternoon winds.
              </p>

            </div>
          </div>
          
          <div className="edit_delete">
            <div className="bothcorrect">
              <Link to={`/write?edit=4`}><PencilIcon className="h-5 w-5" /></Link> 
              <Link to={`/`}><TrashIcon className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        
        {/* Blog content would continue here */}
      </div>
      
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default single
