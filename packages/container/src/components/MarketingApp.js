import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(()=>{
        console.log(' je suis appelé')
        mount(ref.current)

    })
    
    return <div ref={ref}>Marketing</div>
}