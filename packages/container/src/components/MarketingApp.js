import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/MarketingApp';
import { useHistory} from 'react-router-dom';

export default () => {
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
                const { pathname } = history.location;
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            }
        })
        history.listen(onParentNavigate);

      
    },[])
    
    return <div ref={ref}>Marketing</div>
}