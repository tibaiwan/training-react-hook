import React, { useState } from 'react';

export function UseStateComp(props) {
    const [count, setCount] = useState(props.count || 0);
    return (
        <div style={{display: 'flex'}}>
            <div style={{margin: '5px'}}>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export function UseStateComp2() {
    const [countV2, setCountF4] = useState(1);
    return (
        <div style={{display: 'flex'}}>
            <div style={{margin: '5px'}}>You clicked {countV2} times</div>
            <button onClick={() => setCountF4(countV2 + 1)}>+</button>
        </div>
    )
}
