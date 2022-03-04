import React, { useState } from 'react';

const User = () => {

    const [ loginStatus, setLoginStatus ] = useState(false)

    // return(
    //     <div>
    //         <h1>Welcome Guest</h1>
    //         <h1>Welcome Mark</h1>
    //     </div>
    // )

    // 1. if - else
    // if(loginStatus){
    //     return <h1>Weclome Mark</h1>
    // }else{
    //     return <h1>Welcome Guest</h1>
    // }

    // 2. element value
    // let response;
    // if(loginStatus){
    //     response = <h1>Welcome Mark</h1>
    // } else{
    //     response = <h1>Welcome Guest</h1>
    // }

    // return <div>{ response }</div>

    //3. turnery opeartor
    // return(
    //     loginStatus ? <h1>Welcome Mark</h1> : <h1>Welcome Guest</h1>
    // )

    // 4. circuit breaker
//    return loginStatus && <h1>Welcome Mark</h1>
//    return !loginStatus && <h1>Welcome Guest</h1>

   return loginStatus ? (
       <button className='btn btn-danger'>Logout</button>
   ):(
    <button className='btn btn-primary'>Login</button>
   )


}

export default User;