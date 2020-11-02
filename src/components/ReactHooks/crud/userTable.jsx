import React, { Fragment } from 'react';

const UserTable = (props) => {

    return (
        <Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.users.length > 0 ?
                        props.users.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.Username}</td>
                                <td>
                                    <button 
                                    className="btn btn-primary mr-2"
                                    onClick={()=>{props.editRow(user)}}
                                    
                                    >Editar</button>
                                    <button className="btn btn-danger ml-2"
                                      onClick={()=>{props.EliminarUser(user.id)}}
                                    
                                    
                                    >Eliminar
                                    
                                  
                                    
                                    </button>
                                </td>
                            </tr>

                        )): (

                            <tr>
                                <td colSpan={3}>No User Data</td>
                            </tr>
                        )




                    }
                  

                </tbody>
            </table>
        </Fragment>
    );
}

export default UserTable;