import React from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function AddTodo({addTodo}) {
  const [value, setValue] = React.useState("");
  
  function submitHandler(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Input
        placeholder="Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
