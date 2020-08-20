import React from 'react';

const TodoList = () => {

    const [ todos, setTodos ] = React.useState( [] );
    const [ completed, setCompleted ] = React.useState( [] );


    const handleAddTask = () => {
        const task = document.querySelector( '#task' ).value;
        setTodos( prevState => [ ...prevState, task ] );
        document.querySelector( '#task' ).value = '';
    };

    const handleDeleteTask = ( index ) => {
        setTodos( ( prevState ) => {
            return prevState.filter( ( task, i ) => i !== index );
        } );
    };

    const handleCompleteTask = ( index ) => {
        setCompleted( ( prevState ) => [
            ...prevState,
            todos[ index ]
        ] );

        handleDeleteTask( index );
    };


    return (
        <div>
            <div>
                <label htmlFor='task' style={{ color :"purple" }}>Tarea</label>
                <input type='text' id='task' />

                <button onClick={ handleAddTask }>Agrega tarea</button>
            </div>
            <h2 style={{ color :"red" }}>Listado de tareas total: { todos.length }</h2>
            <table style={{ color :"blue" }}>
                <thead>
                <th><h5>Nombre</h5></th>
                <th><h5>Eliminar</h5></th>
                <th><h5>Completar</h5></th>
                </thead>
                <tbody>
                {
                    todos.map( ( task, index ) => (
                            <tr key={ index }>
                                <td>{ task }</td>
                                <td>
                                    <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                                </td>
                                <td>
                                    <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>

            <h2 style={{ color :"red" }}>Lista de tareas completas total: { completed.length }</h2>
            <table style={{ color :"blue" }}>
                <thead>
                <tr>
                    <th><h5>Nombre</h5></th>
                </tr>
                </thead>
                <tbody>
                {
                    completed.map( ( task, index ) => (
                            <tr key={ index }>
                                <td>{ task }</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;