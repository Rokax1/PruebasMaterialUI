import React ,{useState,Fragment,} from 'react';

import UserTable from './crud/userTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './crud/addUserForm';
import EditUserForm from './crud/EditUserForm';


const Crud = () => {
    const UserData = [
        { id: uuidv4(), name: "Leandro", Username: "Rokax1" },
        { id: uuidv4(), name: "Luis", Username: "luchito" },
    ]

    const [Users, setUsers] = useState(UserData);

    // agregar user

    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([
            ...Users,
            user
        ])
    }
    const EliminarUser = (id) => {
        //console.log(id)
        setUsers(Users.filter(user => user.id !== id))

    }

    //editar usuarios

    const [editing, setEditing] = useState(false);
    const [currentUser, setcurrentUser] = useState({
        id: null, name: '', Username: ''
    });

    const editRow = (user) => {
        setEditing(true)
        setcurrentUser({
            id: user.id, name: user.name, Username: user.Username
        });

    }

    const updateUser = (id, updateUser) => {

        setEditing(false);
        setUsers(Users.map(user => (user.id === id ? updateUser : user)))

    }

    return (
        <Fragment>
            <div className="container mt-5">
                <h1>Crud with hooks</h1>
                <div className="row mt-5">

                    <div className="col-md-4">
                        {
                            editing ? (
                                <div><h2>Edit Users</h2>
                                    <EditUserForm currentUser={currentUser}
                                        updateUser={updateUser} />
                                </div>

                            ) : (
                                    <div><h2>Add Users</h2>
                                        <AddUserForm addUser={addUser} />
                                    </div>

                                )

                        }





                    </div>
                    <div className="col-md-8">
                        <h2>View users</h2>
                        <UserTable
                            users={Users}
                            EliminarUser={EliminarUser}
                            //setEditing={setEditing}
                            editRow={editRow} />
                    </div>

                </div>
            </div>
        </Fragment>

    );
}

export default Crud;