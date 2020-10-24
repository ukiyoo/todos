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
    <Grid centered columns={4}>
      <Grid.Column>
        <Segment inverted color=''>
        <Header as='H1' textAlign='center'>
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
