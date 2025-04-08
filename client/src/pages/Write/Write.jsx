import React, { useState } from 'react'
import "./Write.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState("")
  
    return (
        <div className="write__write">
            <div className="content__write">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />

                </div>
            </div>

            <div className="menu__write">
                <div className="item">
                    <h2 style={{ margin: 0 }}>Publish</h2>
                    <span><b>Status:</b> Draft</span>
                    <span><b>Visibility:</b> Public</span>
                    <input type="file" name='image upload' id='file' />
                    {/* <label htmlFor="file" style={{ color: "GrayText", cursor: 'pointer' }}>Upload Image</label> */}
                    <div className="button__write">
                        <button>Save as a Draft</button>
                        <button>Update</button>
                    </div>
                </div>

                <hr />

                <div className="item">
                    <h2>Category</h2>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="art" id='art' />
                        <label htmlFor="art">Art</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="science" id='science' />
                        <label htmlFor="science">Science</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="technology" id='technology' />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="cinema" id='cinema' />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="design" id='design' />
                        <label htmlFor="design">Design</label>
                    </div>
                    
                    <div className="catag">
                        <input type="radio" name='cat' value="food" id='food' />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
