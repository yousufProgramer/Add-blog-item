import React from 'react'
import { Todos } from './Todos'
import './Todo.css'
export const Todo = (props) => {
  return (
    <div>
      <h1>Our Blog</h1>
      <div className='todo-desing'>
        {props.todo.map((todo)=>(
           <div className='blog-section'>
             <Todos todos = {todo.item} key= {todo.id} id = {todo.id} onRemoveItem = {props.onRemoveItem}/>
           </div>
        ))}
    </div>
    </div>
  )
}
