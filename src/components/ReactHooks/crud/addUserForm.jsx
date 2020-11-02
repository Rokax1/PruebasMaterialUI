import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const onSubmit = (data, e) => {
       // console.log(data)

        props.addUser(data);
        // limpiar campos
        e.target.reset();
    }

    

    const { register, errors, handleSubmit } = useForm();



    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" name="name" className="form-control" placeholder=""
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'Name es requerido'
                                }
                            })
                        }


                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.name?.message}
                    </span>
                </div>
                <div className="form-group">
                    <label >UserName</label>
                    <input type="text" name="Username" className="form-control" placeholder=""
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'Username es requerido'
                                }
                            })
                        }
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.Username?.message}
                    </span>
                </div>
                <button className="btn btn-primary">Ingresar</button>
            </form>
        </Fragment>
    );
}

export default AddUserForm;