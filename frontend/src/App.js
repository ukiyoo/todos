import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'
import { Container, Header } from 'semantic-ui-react'

function App() {
  const [todos, setTodos] = React.useState([
    {title: "Create function", complete: false},
    {title: "Refactor code", complete: false},
    {title: "Git push", complete: false},
  ]);

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].complete = true;
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function addTodo(title) {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  }

  return (
    <Container>
      <Header as='h1' textAlign='center'>
        <Header.Content>TO-DO LIST</Header.Content>
      </Header>
        <TodoList 
          todos={todos}  
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      <AddTodo addTodo={addTodo}/>
    </Container>
  );
}

export default App;
