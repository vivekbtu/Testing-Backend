// import React from "react"
// import { useEffect } from "react"
// import { useState } from "react"
// // import {url} from "../url/backend.url"
// import url from "../url/backend.url"


// const NotesCreate = () => {
    
//     const [title, setTitle] = useState("")
//     const [note, setNote] = useState("")

//     const handleSubmit = () => {
//         const payload = {
//             title,
//             note
//         }
       
//         fetch(`${url}/notes/create`, {
//             method : "POST",
//             body : JSON.stringify(payload),
//             headers : {
//                 'Content-Type': 'application/json',
//                 'Authorization' : `Bearer ${localStorage.getItem("psctoken")}`
//             }
//         })
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
//     }
//     return(
//         <div>
//             <h1>Add note here</h1>
//             <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
//             <input type="text" placeholder="actual note" value={note} onChange={(e) => setNote(e.target.value)}></input>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }


// export {NotesCreate}