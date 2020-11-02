import  React, {useEffect, useState} from "react";

const Nosotros = () => {

const [users,setUsers]= useState([]);

useEffect(()=>{
    obtenerDatos();
},[])

const obtenerDatos =  async()=>{
 const data=   await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
 const usersfetch=await data.json();

 //console.log(users);
setUsers(usersfetch.civilizations);

}

    return ( 
        <div>
            <ul>
                {
                    users.map((user,index)=>(
                        <li key={index}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Nosotros;