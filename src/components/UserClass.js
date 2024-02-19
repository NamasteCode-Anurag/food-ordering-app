import React from "react";

class UserClass extends React.Component {
  constructor(props){
      
      super(props);

      this.state = {
        userInfo: {
          name: "Default",
          location: "Def. Location",
        },
      };
      // console.log(this.props.name+"Child Constructor")
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/NamasteCode-Anurag");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });

  }

  render() {
    console.log(this.state.userInfo);
    return (
      <div className="user-class">
        <h1>Login: {this.state.userInfo.login}</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Location: Pune</h2>
        <h2>Contact: iamanurag2405</h2>
      </div>
    );
  }
}

export default UserClass;
