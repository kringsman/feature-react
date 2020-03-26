import React from 'react';


const NotFound = () => (
    //con reactFrom pueda enviarle al Dom varios h 
    //sino tocaria enviarle un solo h y divs
    <React.Fragment>
        <h1>No Encontrado </h1>        
        <h2>Regresa al Home</h2>   
    </React.Fragment>
);

export default NotFound;