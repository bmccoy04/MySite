import React, { Component } from 'react';
import TodoList from '../todoList/TodoList';

class VisibleTodoList extends Component {
    render() {
        return (
            <div>
                <TodoList todos={[{id: 1, completed: false, text: 'test'}]} onTodoClick={() => {alert(1)}} ></TodoList>
            </div>
        );
    }
}

export default VisibleTodoList;