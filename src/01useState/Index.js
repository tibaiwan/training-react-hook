import React from 'react';
import { UseStateComp, UseStateComp2 } from './01';

export function UseStateExample() {
    return (
        <div>
            <UseStateComp count={10}/>
            <UseStateComp2 />
        </div>
    )
}
