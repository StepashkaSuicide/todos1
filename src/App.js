import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {addNewTodo, fetchTodos} from "./reducers/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import ActiveCompleted from "./components/ActiveComleted";

const App = () => {
    const [text, setText] = useState('')
    const {status, error} = useSelector(state => state.oneSlice)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addNewTodo(text))
        setText('')
    }
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])



    return (
        <div className={s.border}>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>

            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured:{error}</h2>}
            <TodoList/>
            <ActiveCompleted/>
        </div>
    );
};
export default App;

