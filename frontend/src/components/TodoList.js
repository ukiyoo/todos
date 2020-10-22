import React from 'react';
import { List } from 'semantic-ui-react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <List divided relaxed>{props.todos.map((todo, index) =>
            <TodoItem key={todo.id} todo={todo} index={index}/>
        )}
        </List>
    );
}