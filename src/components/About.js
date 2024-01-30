import UserContext from '../utils/UserContext';
import UserClass from './UserClass'
import React from 'react'
/* const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <UserClass name={"Poorvik"}/>

        </div>
    )
} */

//Class components
class About extends React.Component{
  constructor(){
    super();
    console.log("parent constructor");

  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render(){
    console.log("parent Render");
    return(
        <div>
          <div>
            <UserContext.Consumer>
              {(({loggedInUser})=>(<h1 className='text-xl font-bold'>{loggedInUser}</h1>)
              )}
            </UserContext.Consumer>
          </div>
            <h1>About</h1>
            <UserClass name={"First"}/>
            <UserClass name={"Second"}/>

        </div>
    )
  }
}

export default About