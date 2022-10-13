import React from "react";
import ReactDOM from "react-dom"
import App from "./App"

//mount funtion to start up the app
// dine the context isolation 

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

//dev and isolation
// call mount directly

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot) {
        mount(devRoot);
    }
}

// running throug container we should export mount function 
export {mount}