import React, { useState } from 'react';
import Todos from './Components/Todos';
import FormTodo from './Components/FormTodo';
import CtxTodo from './Components/CtxTodo';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="container p-3">
        <CtxTodo.Provider value={[todos, setTodos]}>
          <Todos />
          <FormTodo />
        </CtxTodo.Provider>
      </header>
    </div>
  );
}

export default App;
