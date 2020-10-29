import React, { useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {
  Grid,
  Header,
  Segment,
  Dimmer,
  Loader,
  Message,
} from "semantic-ui-react";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [err, setError] = React.useState(false);
  const url = "http://localhost:8000/api/todos/";

  function getTodos() {
    axios
      .get(url)
      .then((todos) => {
        setIsLoaded(true);
        setTodos(todos.data);
        console.log(todos);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }

  useEffect(() => {
    getTodos();
  }, []);

  function completeTodo(todo, index) {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    /* In order not to pass the title field in the put method, 
    you need to change the model fields in django */
    axios
      .put(url + todo.id + "/", {
        title: todo.title,
        complete: newTodos[index].complete,
      })
      .then((response) => {
        console.log(response.data);
        setTodos(newTodos);
        setError(false);
      })
      .catch((error) => setError(error));
  }

  function removeTodo(todo, index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    axios
      .delete(url + todo.id)
      .then((response) => {
        console.log(response.data);
        setTodos(newTodos);
        setError(false);
      })
      .catch((error) => setError(error));
  }

  function addTodo(title) {
    const newTodos = [...todos, { title }];
    axios
      .post(url, { title: title })
      .then((response) => {
        console.log(response.data);
        setTodos(newTodos);
        setError(false);
        getTodos();
      })
      .catch((error) => setError(error));
  }

  return (
    <Grid centered stackable columns={16}>
      <Grid.Column computer={6}>
        <Segment inverted>
          <Header as="h1" textAlign="center">
            <Header.Content>TODOs</Header.Content>
          </Header>
          <Dimmer active={isLoaded ? false : true}>
            <Loader>Loading</Loader>
          </Dimmer>
          {todos.length ? (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ) : (
            <p>There's nothing</p>
          )}
          <AddTodo addTodo={addTodo} />
          {err && <Message error header={err.message} />}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
