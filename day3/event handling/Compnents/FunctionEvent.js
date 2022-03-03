import React,{ useState } from 'react';


const FunctionEvent = () => {
    const [name, setName] = useState('Guest')

    function onClickHandler(){
        setName('Mark')
    }

    return(
        <div>
            <h1>Name: { name }</h1>
            <button onClick={ onClickHandler }>Button</button>
        </div>
    )
    
}

export default FunctionEvent;