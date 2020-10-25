import React from 'react';
import {List, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function TodoItem({todo, index, removeTodo, completeTodo}) {
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


TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired
    }).isRequired,
    index: PropTypes.number,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
};

export default TodoItem