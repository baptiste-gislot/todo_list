import React, { useContext } from 'react';
import CtxTodo from '../Components/CtxTodo';

const Todo = (props) => {

  const [todos, setTodos] = useContext(CtxTodo);

  const deleteTodo = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
  };

  return(
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <button className='btn btn-danger' onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;