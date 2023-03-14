import React from 'react'
import { useState } from 'react'
import { Todo } from './Todo'
import './Home.moudle.css'
import { NewTodo } from './NewTodo'
import { v4 as uuidv4 } from 'uuid';

export const Home = () => {
   const [todos,setTodos] = useState([])
   //////// add blog
   const handleAddItem = (item) => {
    setTodos((preBlog)=>{
        return[...preBlog,{id : uuidv4(), item}]
        
    })
   }

   //////////remove blog 
   const handleRemove = (id) => {
    setTodos((blogItem) => {
        const filterBlog  = blogItem.filter((blog) => blog.id ===! id);
         return filterBlog;
    })
   }

  return (

    <div className='header'>
        <h2 className='header-text'>Add Your Blog</h2>
        <NewTodo onAddBlog = {handleAddItem}/>
        <div className='container'>
        <Todo todo = {todos} key= {todos.id} onRemoveItem = {handleRemove}/>
    </div>
    </div>
    
  )
}
