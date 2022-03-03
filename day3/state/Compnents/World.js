import React, {useState} from 'react';

const World = () => {
    const [name, mySetName] = useState('Guest')

    function onClickHandler(){
        mySetName('Pual')
    }

    return(
        <div>
            <h1>Name : {name}</h1>
            <button onClick={onClickHandler} >Login</button>
        </div>
    )
}
export default World;