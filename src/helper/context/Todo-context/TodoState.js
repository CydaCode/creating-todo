import React, { useReducer } from "react";
import TodoContext from "./TodoContex";
import { ADD_TODO, DELETE_TODO, LOAD_TODO, TOGGLE_TODO, UPDATED_TODO } from "./TodoType";
import TodoReducer from "./TodoReducer";

export const TodoState =({children})=> {

    const initialState = {
        todos: []
    }

    const [state,dispatch] = useReducer(TodoReducer, initialState)

    // Creating pue functions
    // For Add todo
    const addTodo =(addObj)=> {
        dispatch({type: ADD_TODO, payload: addObj})
    }

    // For delete todo
    const deleteTodo =(userID)=> {
        dispatch({type: DELETE_TODO, payload: userID})
    }

     // For toggle todo
     const toggleTodo =(userID)=> {
        dispatch({type: TOGGLE_TODO, payload: userID})
    }

     // For toggle todo
     const updatedTodos =(todoObject)=> {
        dispatch({type: UPDATED_TODO, payload: todoObject})
    }


     // For LOAD todo
     const loadTodos =(todoObject)=> {
        dispatch({type: LOAD_TODO, payload: todoObject})
    }




    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        updatedTodos,
        loadTodos,
        ...state
    }}>{children}</TodoContext.Provider>
}