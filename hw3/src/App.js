import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setTodos} from "./features/todo/todoSlice";

function App() {
    const [input, setInput] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const onChange = e => {
        setInput(e.target.value)
    }
    const onClick = () => {
        dispatch(setTodos(input));
    }
    const onRemove = (index) => {
        dispatch(setTodos(index));
    }
    return (
        <div className="App">
            <input value={input} onChange={onChange} type="text"/>
            <button onClick={onClick} >ADD</button>
            {
                todos.map((todo, i) => {
                    return <div>{todo}<button key={i} onClick={() => onRemove(todo.i)}>delete</button></div>
                })
            }
        </div>
    );
}

export default App;
