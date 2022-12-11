// import React from "react"
// import { useState } from "react"
// import url from "../url/backend.url"

// const Login = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = () => {
//         const payload = {
//             email,
//             password
//         }
       
//         fetch(`${url}/login`, {
//             method : "POST",
//             body : JSON.stringify(payload),
//             headers : {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res)
//             localStorage.setItem("psctoken",res.token)
//         })
//         .catch((err) => console.log(err))
//     }
//     return(
//         <div>
//             <h1>Login here</h1>
//             <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
//             <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }


// export {Login}