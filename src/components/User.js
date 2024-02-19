import { useState } from "react";

const User =(props)=>{
    const [count] = useState(0);
    const [count2] = useState(2);
    return(
        <div className="user">
            <h1>Name: {props.name}</h1>
            <h2>Contact: iamanurag2405</h2>
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
        </div>
    )
}
export default User;