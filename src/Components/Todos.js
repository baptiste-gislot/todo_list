import React, { useContext } from 'react';
import CtxTodo from './CtxTodo';
import Todo from '../Components/Todo';

const Todos = () => {
  const [todos, setTodos] = useContext(CtxTodo);

  return(
    <div>
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} description={todo.description} index={index} />
      })}
    </div>
  )
};

export default Todos;