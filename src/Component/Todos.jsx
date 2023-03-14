import React from 'react'
import './Todos.css'
import { TiDelete } from 'react-icons/ti';
export const Todos = (props) => {
    const {name,description} = props.todos
    const {id} = props
    const handleRemove = (id) =>{
      props.onRemoveItem(id);
     
    }
  return (
    <div className='todos-header'>
        <article>
           <h4>{name}</h4>
           <p>{description}</p>
        </article>
        <button className='todos-btn' onClick={()=> {handleRemove(id)}}>
            <TiDelete className='icon'/>
        </button>
    </div>
  )
}
