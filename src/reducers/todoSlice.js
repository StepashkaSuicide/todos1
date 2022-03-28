import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                text: action.payload.text,
                id: new Date().toISOString(),
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id )
        },
        toggleCompleteTodo (state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id )
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export default todoSlice.reducer
export const {addTodo, removeTodo, toggleCompleteTodo} = todoSlice.actions

