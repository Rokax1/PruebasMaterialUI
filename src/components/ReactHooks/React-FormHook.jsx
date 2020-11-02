import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';


const FormHook = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data,e) => {
        console.log(data);
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Form-hook</h1>


            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="titulo" className="form-control my-2"
                    ref={register({
                        required: { value: true, message: 'titulo requerido' },
                        maxLength: {
                            value: 5, 
                            message: 'No más de 5 carácteres!'
                            },
                    })}

                />
                <span className="text-danger text-small d-block mb-2">
                    { errors?.titulo?.message}
                </span>


                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </Fragment>
    );
}

export default FormHook;