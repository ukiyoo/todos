import React from 'react';
import { List } from 'semantic-ui-react'
import TodoItem from './TodoItem'

export default function TodoList({todos, removeTodo, completeTodo}) {
    return (
        <List divided relaxed size={'large'} animated verticalAlign='middle'>
            {todos.map((todo, index) =>
                <TodoItem 
                    todo={todo} 
                    index={index}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />
        )}
        </List>
    );
}