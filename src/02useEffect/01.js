import React, { useEffect, useState } from 'react';

export function UseStateComp(props) {
    const [count, setCount] = useState(props.count || 0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
    useEffect(() => {
        console.log('useEffect', count);
        setCount(5);
        return () => {
            console.log('willUnmount')
        }
    }, [])

    return (
        <div style={{display: 'flex'}}>
            <div style={{margin: '5px'}}>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
