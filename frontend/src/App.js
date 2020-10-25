import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'
import { Grid, Header, Segment } from 'semantic-ui-react'

function App() {
  const [todos, setTodos] = React.useState([
    {title: "Lorem ipsum dolor sit amet", complete: false},
    {title: "Consectetur adipiscing elit", complete: false},
    {title: "Labore et dolore magna aliqua", complete: false},
  ]);

  /*
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
          setTimeout(() => {
            setTodos(todos)
        }, 2000)
      })
  }, [])
  */

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
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
    <Grid centered stackable columns={16}>
      <Grid.Column computer={6}>
        <Segment inverted>
        <Header as='h1' textAlign='center'>
          <Header.Content>TODOs</Header.Content>
        </Header>
          <TodoList 
            todos={todos}  
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
          <AddTodo addTodo={addTodo}/>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
