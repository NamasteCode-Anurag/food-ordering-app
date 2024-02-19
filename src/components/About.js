import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="About p-2 m-2">
                <h1 className="text-3xl font-bold">About Us</h1>
                <h3 className="text-xl">This is my Food Ordering App</h3>
                <br></br>
                <UserClass name="Anurag"/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="About">
//             <h1>About</h1>
//             <h3>This is my Food Ordering App</h3>
//             <User name={"Anurag (Function)"}/>
//             <UserClass name={"First (Class-based)"}/>
//             <UserClass name={"Second (Class-based)"}/>
//             <UserClass name={"Third (Class-based)"}/>
//         </div>
//     );
// }

export default About;