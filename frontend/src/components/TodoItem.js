import React from 'react'
import {List, Button, Icon} from 'semantic-ui-react'

export default function TodoItem({todo, index, removeTodo, completeTodo}) {
    return (
    <List.Item>
        <List.Content floated='right'>
            <Button icon onClick={() => removeTodo(index)}><Icon name='delete' /></Button>
        </List.Content>
        <List.Content floated='right'>
            <Button onClick={() => completeTodo(index)}>Complete</Button>
        </List.Content>
        {todo.complete ? <Icon size={'large'} color={'green'} name='check' /> : '' }
        <List.Content >
            {todo.title}
        </List.Content>
    </List.Item>
    )
}