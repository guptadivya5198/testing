import React, { useMemo } from 'react';
import { useState } from 'react';

function Register() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increament = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <div>
      <div>
        <h1>My Todos</h1>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count : {count}
        <button onClick={increament}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log('Calculating..');
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

export default Register;
