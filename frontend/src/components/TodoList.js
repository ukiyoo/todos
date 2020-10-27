import React from 'react';
import { List } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


function TodoList({todos, removeTodo, completeTodo}) {
    return (
        <List divided relaxed size={'large'} animated verticalAlign='middle'>
            {todos.map((todo, index) =>
                <TodoItem 
                    todo={todo}
                    key={index}
                    index={index}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />
        )}
        </List>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        complete: PropTypes.bool
    })).isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
};


export default TodoList