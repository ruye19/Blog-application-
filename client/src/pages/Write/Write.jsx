import React, { useState } from 'react'
import "./Write.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import moment from "moment"
import { useLocation, useNavigate } from 'react-router';

const Write = () => {
    const state = useLocation().state
    const [value, setValue] = useState(state?.value || "")
    const [title, setTitle] = useState(state?.title || "")
    const [Image, setImage] = useState(null)
    const [cat, setCat] = useState(state?.cat || "")

  const navigate=useNavigate()
    }
    const upload =async ()=>{
        try {
            const formData = new FormData();
            formData.append("file",file)
            const res= await axios.post("/upload",formData)
            return res.data
        } catch (error) {
            console.log(error)
            
        }
    }
    const handle_submit = async e =>{
        e.preventDefault()
        const imgUrl = upload()
        try {
         state ? await axios.put(`posts/${state.id}`, {
           title,
           content: value,
           catag,
           img : file ? imgUrl : ""
        }) : 
        await axios.put(`posts/`, {
            title,
            content: value,
            catag,
            img : file ? imgUrl : "",
            created_data:moment (Date.now()).format(("YYYY-MM-DD HH:MM"))
        })

        navigator("/")
           
        } catch (error) {
            console.log(error)
        }
       
  
    return (
        <div className="write__write">
            <div className="content__write">
                <input type="text" value={title} placeholder='Title' onChange={e=> setTitle(e.target.title)}/>
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />

                </div>
            </div>

            <div className="menu__write">
                <div className="item">
                    <h2 style={{ margin: 0 }}>Publish</h2>
                    <span><b>Status:</b> Draft</span>
                    <span><b>Visibility:</b> Public</span>
                    <input type="file" name='image upload' id='file' value={Image} onChange={e=> setImage(e.target.img)}/>
                    {/* <label htmlFor="file" style={{ color: "GrayText", cursor: 'pointer' }}>Upload Image</label> */}
                    <div className="button__write">
                        <button>Save as a Draft</button>
                        <button onClick={handle_submit}>
                            publish 

                        </button>
                    </div>
                </div>

                <hr />

                <div className="item">
                    <h2>Category</h2>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat==="art"} name='cat' value="art" id='art' onChange={e=>setCat(e.target.cat)}  />
                        <label htmlFor="art">Art</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat=== "science"} name='cat' value="science" id='science'  onChange={e=>setCat(e.target.cat)} />
                        <label htmlFor="science">Science</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat=== "technology"} name='cat' value="technology" id='technology'  onChange={e=>setCat(e.target.cat)} />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat=== "cinema"} name='cat' value="cinema" id='cinema' onChange={e=>setCat(e.target.cat)}  />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat=== "design"} name='cat' value="design" id='design'   onChange={e=>setCat(e.target.cat)}/>
                        <label htmlFor="design">Design</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" cheacked={cat === "food"} name='cat' value="food" id='food' onChange={e=>setCat(e.target.cat)}  />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
