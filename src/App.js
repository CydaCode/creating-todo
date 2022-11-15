import React,{ useContext, useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './helper/context/Todo-context/TodoContex';
import TodoServices from './helper/context/Todo-context/todo.service';




function App() {
  const [item, setitem] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [isToEditTodo, setIsToEditTodo] = useState({})
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  const {loadTodos, addTodo, deleteTodo, todos, toggleTodo, updatedTodos} = useContext(TodoContext)
  

  console.log(process.env.REACT_APP_BASE_URL)

  const handleSubmit=()=> {
    console.log(todos)
    const newTodo ={
      id: uuidv4(),
      item: item,
      isCompleted: false,
      
    }

    TodoServices.addTodos(item).then((todo) => {
      console.log(todo)
      // loadTodos(todos)
    })

    loadTodos(todos)
    addTodo(newTodo)
    setitem('')
    setIsEmptyInput(true)

  }


  const handleDelete= (id)=> {
    console.log(id)
    deleteTodo(id)

    TodoServices.deleTodosById(id).then((todo) => {
      console.log(todo)

    })

    
  }

  const handleToggle =(id)=> {
    toggleTodo(id)
   
  }

  const handleEdit =(todoObject)=> {
    setIsEditMode(true)
    console.log(todoObject)
    setIsToEditTodo(todoObject)
    setitem(todoObject.item)
  }

  const handleUpdateTodo=()=> {
    console.log(item)
    const payload = {
      id: isToEditTodo.id,
      item
    }
    updatedTodos(payload)
    setIsEditMode(false)
  }

useEffect(() => {
  TodoServices.getTodos().then((todos) => {
    loadTodos(todos)

  })
}, [])

  



  return (
    
    
    <div className="App">

{
      isEditMode ? (
      <section className='todo-input'>
        <input 
              placeholder='update a list...'
              value={item}
              onChange={(e) => setitem(e.target.value)}/>
        <button  onClick={handleUpdateTodo} className='edit-btn'>Edit Todo</button>
      </section>
      ) : (
      <section className='todo-input'>
        <input 
              placeholder='Enter a list...'
              value={item}
              onChange={(e) => setitem(e.target.value)}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </section>
      )
    }
      
      
      <section>
        <ul>
          {
            todos.map((todo) => {
              const {item, id, isCompleted} = todo
              return(
                <li className={isCompleted? 'completed' : null} key={id} >
                  
                {item}
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
