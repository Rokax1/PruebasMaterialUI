import React, { Fragment } from "react";
import Comentario from "./comentario";
import Contador from "./contador";
import EjemploUno from "./EjemploUno";
import Formulario from "./Formulario";
import MiComponente from "./MiComponente";
import FormHook from "./React-FormHook";
import Saludo from "./saludo";

const Ejemplos = () => {

    const sujeto = {
  nombre: 'leandro',
  urlImagen: 'https://via.placeholder.com/64',
  texto: 'laskasksakkaskask'
}
    return (
        <Fragment>
            <Formulario />
            <hr></hr>
            <FormHook />
            <hr></hr>
            <EjemploUno />

            <Saludo persona="juanito" />
            <Saludo persona="leandro" />
            <Comentario sujeto={sujeto} />


            <MiComponente />
            <Contador />

        
        </Fragment>


    );
}

export default Ejemplos;