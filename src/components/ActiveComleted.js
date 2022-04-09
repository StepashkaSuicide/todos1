import React from 'react';
import s from './ActiveCompleted.module.css'
import {useDispatch} from "react-redux";
import {activeTodo, allTodo, completedTodo} from "../reducers/todoSlice";

const ActiveCompleted = ({active,  }) => {


    const dispatch = useDispatch()
    return (
        <div className={s.completed}>
            <button onClick={() => dispatch(activeTodo(active))}    > Активные        </button>
            <button onClick={() => dispatch(allTodo())} > Все</button>
            <button onClick={() => dispatch(completedTodo(active))} > Завершенные</button>
        </div>

    );
};

export default ActiveCompleted;