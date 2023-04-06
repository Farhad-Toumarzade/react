import { useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({firstName:"", lastName:""});

    const changeHandler = (e) => {
    setUser({...user, firstName: e.target.value});
    }
    const lastNameHandler = (e) => {
        setUser({...user, lastName: e.target.value});
    }
// !!!!!!=======> (...user) in ke estefade shod az property copy gerft. property ke user nam dasht!!!!!!!!
// !!!!!! =====> agar state ma object bashe bayad az property copy gerfte beshe!!!!!
    return ( 
        <form>
            <input type="text" value={user.firstName} onChange={changeHandler} />
            <input type="text" value={user.lastName} onChange={lastNameHandler} />
            <h2>my name is - {user.firstName}</h2>
            <h2>my name is - {user.lastName}</h2>
            <div>{JSON.stringify(user)}</div>
        </form>
     );
}
 
export default HookObject;