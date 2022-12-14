import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import {createMemoryHistory, createBrowserHistory} from "history";
//mount funtion to start up the app
// dine the context isolation 

const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    // history.listen((location) => {
    //     // onNavigate(location);
    //    });
    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
        <App history={history}/>,
        el
    )

    return {
        onParentNavigate({pathname: nextPathname}){
            console.log('navigation from container')

            const {pathname} = history.location;
            if(pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    }
}




//dev and isolation
// call mount directly

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}

// running throug container we should export mount function 
export {mount}