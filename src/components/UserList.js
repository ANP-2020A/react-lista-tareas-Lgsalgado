import React from 'react';

const UserList = () => {

    const initialUsers = () => {
        console.log( 'inicializando estado' );
        return [
            {
                name: 'Gabriel',
                lastname: 'Salgado'
            },
            {
                name: 'Luis',
                lastname: 'Santamaría'
            }

        ];
    }

    const [ users, setUsers ] = React.useState( initialUsers );

    const handleAddUser = () => {
        const name = document.querySelector( '#name' ).value;
        const lastname = document.querySelector( '#lastname' ).value;
        const newUser = {
            name,
            lastname
        };
        setUsers( ( prevState ) => [
            ...prevState,
            newUser
        ] );
    };


    return (
        <div>
            <div style={{ color :"blue" }}>
                <label htmlFor='name'>Nombre</label>
                <input type='text' id='name' />
                <label htmlFor='lastname'>Apellido</label>
                <input type='text' id='lastname' />

                <button onClick={ handleAddUser }>Ingresar usuario</button>
            </div>
            <h2 style={{ color :"red" }}
                    >Lista de usuarios total: { users.length }</h2>
            <ul style={{ color :"green" }}>
                {
                    users.map( ( user, index ) => (
                            <li key={ index }>{ user.name } { user.lastname }</li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default UserList;