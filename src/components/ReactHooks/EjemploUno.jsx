import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'
const EjemploUno = () => {

    const { register, errors, handleSubmit } = useForm();
    const [Entrada, setEntrada] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        setEntrada([
            ...Entrada,
            data
        ])

        e.target.reset();

       
    }
    


    return (

        <Fragment>
            <h1>ejercicio 1</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="form-control" name="titulo" placeholder="titulo"
                    ref={
                        register({
                            required: { value: true, message: 'campo obligatorio' },
                            minLength: { value: 2, message: 'debe ser superior a dis caracteres' }
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <input type="text" className="form-control" name="descripcion" placeholder="descripcion"
                    ref={
                        register({
                            required: { value: true, message: 'campo obligatorio' },
                            minLength: { value: 2, message: 'debe ser superior a dis caracteres' }
                        })
                    } />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>
                <input type="submit" className="btn btn-primary mt-3" value="ingresar" />

            </form>
            <ul>
                {
                    Entrada.map((item, index) =>

                        <li key={index}>{item.titulo}- {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default EjemploUno;