import { useState } from "react"

const User = ({name})=>{
    const [count] = useState(0);
   return (
     <div className="user">
        <h1>Count: {count}</h1>
       <h2>Name: {name}</h2>
       <h3>Location: Tirupathi</h3>
     </div>
   )
}
export default User