// axios.default.baseURL

import axiosInstance from "../../axios-config/axios-todo-config"





const getTodos = async  () => {
    try {
        const response = await axiosInstance.get("/todos");
        console.log(response)
        return response.data
    } 
    catch (error) {
        console.log(error)
    }
}


const addTodos = async (item) => {
    
    try {
        const newTodo = {item}
        const response = await axiosInstance.post("/add", newTodo);
        console.log(response)
        return response.data
    } 
    catch (error) {
        console.log(error)
    }
}

const getTodoById = async (todo_id) => {
    try {
        const response =await axiosInstance.get("/todos/" + todo_id)
        console.log(response)
        console.log(response.data)
        return response.data
    } catch (error){
        console.log(error)
    }
}

const deleTodosById = async (todo_id) => {
    try {
        const response =await axiosInstance.post("/delete/" + todo_id)
        console.log(response)
        console.log(response.data)
        return response.data
    } catch (error){
        console.log(error)
    }
}

const TodoServices = {
    getTodos,
    deleTodosById,
    addTodos,
    getTodoById,
}

export default TodoServices;