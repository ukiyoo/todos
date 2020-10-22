import React from 'react'
import { Form } from 'semantic-ui-react'

export default function AddTodo({addTodo}) {
    const [value, setValue] = React.useState('')

    function submitHandler(e) {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Input
                    placeholder='title'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Form.Button
                    content='Add'
                />
            </Form.Group>
        </Form>
    )
}