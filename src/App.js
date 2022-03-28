import React, {useState} from 'react';
import s from './App.module.css'
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {addTodo} from "./reducers/todoSlice";
import {useDispatch} from "react-redux";

const App = () => {
const [text, setText] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div className={s.border}>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
                <TodoList/>
            </div>
    );
};
export default App;

