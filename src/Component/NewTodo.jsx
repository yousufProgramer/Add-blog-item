import React from 'react'
import { useState } from 'react'
import './Form.moudle.css'
export const NewTodo = (props) => {

    const [blog,setBlog] = useState({name: " " , description: " "});
    const{name,description} = blog;

    const handleChange = (e) =>{
       const name  = e.target.name;
       setBlog((oldBlog)=>{
        return{...oldBlog, [name]: e.target.value};
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddBlog(blog);
        setBlog({name : " " ,description : " " })
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='from-filed name-in'>
            <label htmlFor="name">Name :  </label>
            <input 
            type="text" 
            id='name' 
            name='name'
            value={name}
            required
            onChange={handleChange}
             />
            </div>

            <div className='from-filed'>
            <label htmlFor="Des">Description : </label>
            <input 
            type="text"
            id='des'
            name='description'
            value={description}
            required
            onChange={handleChange}
              />
            </div>

            <button className='form-btn' >Submit</button>
        </form>
    </div>
  )
}
