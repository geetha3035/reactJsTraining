import React, {useState} from 'react';

const Header = () => {

    const [name, setName] = useState('Paul')

    function onChangeHandler(e){
        setName(e.target.value)
    }

    return(
        <div>
            <h1>{ name }</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={onChangeHandler} className="form-control"/>

                </div>
                <input type="submit"   className="btn btn-primary" value="Submit" />
            </form>
        </div>
    )
}
export default Header;