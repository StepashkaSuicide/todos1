import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeTodo} from "./reducers/tSlice";





const App = () => {
    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)

    const dispatch = useDispatch()


  return (
      <div>
          <h1>Счетчик  {count} </h1>
          <div>
              <button onClick={() => dispatch(increment())} > Повысить </button>
              <button onClick={() => dispatch(decrement())} > Уменьшить </button>
              <button onClick={() => dispatch(removeTodo())} > Удалить </button>
              <button onClick={() => dispatch(addTodo(prompt()))} > Добавить </button>
          </div>

          <ul>
              {todos.map(todo =>
                  <li key={todo}>{todo}</li>)}
          </ul>
      </div>


  );
}

export default App;
