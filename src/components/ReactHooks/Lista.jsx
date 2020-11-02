import React, { Fragment, useEffect, useState } from 'react'




const Lista = () => {
    const [arrayNumero, setLista] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const [numero, setNumero] = useState(9);

    const addElement = () => {
        console.log( typeof arrayNumero);
        setNumero(numero + 1)
        setLista([
            ...arrayNumero, numero])
    }

    return (
        <Fragment>|
            <h2>hola</h2>
            <button onClick={addElement}>Agregar</button>
            {
                arrayNumero.map((item, index) =>
                    <p key={index}> {item} - {index}</p>
                )
            }
        </Fragment>
    );
}

export default Lista;
