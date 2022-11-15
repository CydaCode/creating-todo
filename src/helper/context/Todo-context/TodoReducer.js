import { ADD_TODO, DELETE_TODO, LOAD_TODO, TOGGLE_TODO, UPDATED_TODO } from "./TodoType";


const TodoReducer = (state, action) => {
        const {type, payload} = action
    switch (type) {
        case ADD_TODO: 
        return {
            ...state,
            todos: [...state.todos, payload]
        }

        case LOAD_TODO: 
        return {
            ...state,
            todos: payload
        }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todoid) => todoid.id !== payload)
                        
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                if(todo.id === payload) {
                    const updateTodo = {
                        ...todo,
                        isCompleted: !todo.isCompleted,

                            
                    }
                        return updateTodo
                } else {
                        return todo
                    }
                })

            }
        
            case UPDATED_TODO:
                return {
                    ...state,
                    todos: state.todos.map((todo) =>
                    todo.id === payload.id ? {...todo, item: payload.item} : todo
                    )
                }
          
        default:
            return state
    }
}

export default TodoReducer