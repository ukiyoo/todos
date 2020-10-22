import React from 'react'
import {List, Button} from 'semantic-ui-react'

export default function TodoItem({todo, index}) {
    return (
    <List.Item>
        <List.Content floated='right'>
            <Button>Delete</Button>
        </List.Content>
        <List.Content>
            {index+1}&nbsp;{todo.title}
        </List.Content>
    </List.Item>
    )
}