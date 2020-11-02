import React, { Fragment, useState } from 'react'

const Contador = () => {

 const [ numero, setNumero ] = useState(0);

 const aumentar =()=>{

 setNumero(numero+1);
 }
    return (
        <Fragment>
          <h1>contador {numero}</h1> 

          <button onClick = {aumentar} > Aumentar</button> 
          </Fragment>
    )
}

export default Contador;