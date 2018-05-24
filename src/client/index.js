import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return (<h3>Los clientes se encuentran en api/cliente y las compras en api/cliente/(id) </h3>)
}

 render(
     <App/>,
     document.getElementById('app')
 ); 

