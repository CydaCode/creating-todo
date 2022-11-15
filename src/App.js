import React,{ useContext, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './helper/context/Todo-context/TodoContex';



function App() {
  const [title, setTitle] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [isToEditTodo, setIsToEditTodo] = useState({})
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  const {addTodo, deleteTodo, todos, toggleTodo, updatedTodos} = useContext(TodoContext)
  

  console.log(process.env.REACT_APP_BASE_URL)

  const handleSubmit=()=> {
    console.log(todos)
    const newTodo ={
      id: uuidv4(),
      title: title,
      isCompleted: false,
     
    }
    addTodo(newTodo)
    setTitle('')
    setIsEmptyInput(true)
  }


  const handleDelete=(id)=> {
    console.log(id)
    deleteTodo(id)
  }

  const handleToggle =(id)=> {
    toggleTodo(id)
   
  }

  const handleEdit =(todoObject)=> {
    setIsEditMode(true)
    console.log(todoObject)
    setIsToEditTodo(todoObject)
    setTitle(todoObject.title)
  }

  const handleUpdateTodo=()=> {
    console.log(title)
    const payload = {
      id: isToEditTodo.id,
      title
    }
    updatedTodos(payload)
    setIsEditMode(false)
  }

  return (
    
    
    <div className="App">

{
      isEditMode ? (
      <section className='todo-input'>
        <input 
              placeholder='update a list...'
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
        <button  onClick={handleUpdateTodo} className='edit-btn'>Edit Todo</button>
      </section>
      ) : (
      <section className='todo-input'>
        <input 
              placeholder='Enter a list...'
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </section>
      )
    }
      
      
      <section>
        <ul>
          {
            todos.map((todo) => {
              const {title, id, isCompleted} = todo
              return(
                <li className={isCompleted? 'completed' : null} key={id} >
                  
                {title}
                <button className='action-btn'>👁</button>
                {/* <button onClick={()=> handleToggle(id)} className={isCompleted? 'completed' : null}>❌</button> :  */}
                <button onClick={()=> handleToggle(id)} className='action-button'>✅</button>
                <button className='action-btn' onClick={()=> handleEdit(todo)}>📝</button>
                <button className='action-btn' onClick={()=> handleDelete(id)}>🗑</button>
              </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
