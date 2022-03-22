import {createSlice} from "@reduxjs/toolkit";


const tSlice = createSlice({
    name: 'tSlicer',
    initialState: {
        count: 0,
        todos: ['ppp', 'aaa', 'fff']
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state) {
            state.todos.pop()
        }
    }
})


export default tSlice.reducer
export const {increment, decrement, addTodo, removeTodo  } = tSlice.actions