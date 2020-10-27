import React from 'react';
import {List, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function TodoItem({todo, index, removeTodo, completeTodo}) {
    return (
    <List.Item>
        <List.Content floated='right'>
            <Button icon onClick={() => removeTodo(todo, index)}><Icon name='delete' /></Button>
        </List.Content>
        {todo.complete ? <Icon color={'green'} name='check' /> : '' }
        <List.Content onClick={() => completeTodo(todo, index)}>
            {todo.title}
        </List.Content>
    </List.Item>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string,
        complete: PropTypes.bool
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
};

export default TodoItem