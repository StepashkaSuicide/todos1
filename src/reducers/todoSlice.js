import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk(

    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {

        try {
            const response = await fetch('https://my-json-server.typicode.com/falk20/demo/todos')
            console.log(response)
            if (!response.ok) {

                throw new Error('ServerError!')
            }
            const data = await response.json()
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
// ______________________Получение с фейк сервера____________________________________________________________________
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, {rejectWithValue, dispatch}) {

        try {
            const response = await fetch(`https://my-json-server.typicode.com/falk20/demo/todos/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error(`Can;t delete task. Server error.`)
            }
            dispatch(removeTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)
// _____________________Удаление____________________________________________________________________________________
export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {

        const todo = getState().oneSlice.todos.find(todo => todo.id === id)

        try {
            const response = await fetch(`https://my-json-server.typicode.com/falk20/demo/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    active: !todo.active,
                })
            })
            if (!response.ok) {
                throw new Error(`Can't toggle status. Server error`)
            }
            const data = await response.json()
            dispatch(toggleCompleteTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
// _____________________Смена чекбокса______________________________________________________________________________
export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                text: text,
                active: false,
            }
            const response = await fetch('https://my-json-server.typicode.com/falk20/demo/todos/', {
                method: 'POST',
                headers: {
                   'Content-Type':  'application/json'
                },
            body: JSON.stringify(todo)
            })
            if (!response.ok) {
                throw new Error(`Can't add task. Server error`)
            }
            const data = await response.json()
            dispatch(addTodo(data))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
// _____________________Добавление задачи____________________________________________________________________________

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleCompleteTodo(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggleTodo.active = !toggleTodo.active
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
    },
})

export default todoSlice.reducer
const {addTodo, removeTodo, toggleCompleteTodo} = todoSlice.actions





