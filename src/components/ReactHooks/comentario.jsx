
import React, { Fragment } from 'react';

const Comentario = ({sujeto}) => {
    return (
        <Fragment>
            <h1>comentarios</h1>

            <hr className="bg-light" />
            <div className="media">
                <img className="mr-3" src={sujeto.urlImagen} alt="" />
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
    );
}

export default Comentario;