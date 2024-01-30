import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Gopi",
                location:"Tpty"
            }
        }
       // console.log(this.props.name+ " Child constructor");
    }
    async componentDidMount(){
       const user = await fetch("https://api.github.com/users/Akshaymarch7");
       const json = await user.json();
       this.setState({userInfo:json});
        //console.log(this.props.name+ " Child componentDidMount");
    }
   
    render(){
       // console.log(this.props.name+ " Child render");
        const { name,location } = this.state.userInfo;
        return (
        <div className="m-4 p-4 rounded-lg bg-gray-50">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
        )
    }
}

export default UserClass