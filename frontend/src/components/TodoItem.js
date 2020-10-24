import React from 'react';
import {List, Button, Icon } from 'semantic-ui-react';


export default function TodoItem({todo, index, removeTodo, completeTodo}) {
    return (
    <List.Item>
        <List.Content floated='right'>
            <Button icon onClick={() => removeTodo(index)}><Icon name='delete' /></Button>
        </List.Content>
        {todo.complete ? <Icon color={'green'} name='check' /> : '' }
        <List.Content onClick={() => completeTodo(index)}>
            {todo.title}
        </List.Content>
    </List.Item>
    )
}