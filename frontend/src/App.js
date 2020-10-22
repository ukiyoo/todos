import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'
import { Container } from 'semantic-ui-react'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, title: "Create function"},
    {id: 2, title: "Refactor code"},
    {id: 3, title: "Git push"},
  ]);

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
    }]))
  }

  return (
    <Container>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
