import React, {useEffect, useRef} from 'react';
import {mount} from 'auth/AuthApp';
import { useHistory} from 'react-router-dom';

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory(null);

    useEffect(()=>{
      const {onParentNavigate} =   mount(ref.current, {
            // history.listen((location) => {
            //     // onNavigate(location);
            //    });
            //desctructuring l objet location et renome pathname
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname}) => {
                console.log("nextPathname", nextPathname)

                const { pathname } = history.location;
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            },
            onSignIn
        })
        history.listen(onParentNavigate);

      
    },[])
    
    return <div ref={ref}>Auth</div>
}