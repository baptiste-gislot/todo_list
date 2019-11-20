import React, { useState, useContext } from 'react';
import CtxTodo from './CtxTodo';


const FormTodo = () => {

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const addTodo = () => {
    setTodos([...todos, form]);
    setForm({
      title: '',
      description: '',
    });
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="form-group">
          <label for="title">Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
            id="title" 
            placeholder="Title"/>
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input 
            type="text" 
            className="form-control" 
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            id="description" 
            placeholder="Describe your Todo"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={addTodo}>Submit</button>
      </div>
   </div> 
  );
};

export default FormTodo;