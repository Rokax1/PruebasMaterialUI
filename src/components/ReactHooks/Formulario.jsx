import React, { Fragment, useState } from 'react';
const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''

    });

    const cambios = (event) => {
       // console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        })
    }

    const EnviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos);

    }



    return (
        <Fragment>
            <h1>Formulario</h1>

            <form action="" onSubmit={EnviarDatos} className="row">
                <div className="col-md-3" >
                    <input type="text" placeholder="ingrese nombre" className="form-control" name="nombre" onChange={cambios} />
                </div>
                <div className="col-md-3" >
                    <input type="text" placeholder="ingrese apellido" className="form-control" name="apellido" onChange={cambios} />
                </div>
                <div className="col-md-3"  >
                    <input type="submit" className="btn btn-primary" value="ingresar" />
                </div>



            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;