import logo from './logo.svg';
import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom"
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
import { NotesCreate } from './components/NotesCreate';
// import link  from "../src/url/backend.url"
// console.log(link)


function App() {
  return (
    <div className="App">
      {/* <NavLink key="/signup" to="/signup">Sign</NavLink>
      <NavLink key="/login" to="/login">Log in</NavLink>
      <NavLink key="/notes" to="/notes">Notes</NavLink>
      <NavLink key="/createnote" to="/createnote">createnote</NavLink> */}
        <div>
          <h1>Notes APP</h1>
          <Notes />
        {/* <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/createnote" element={<NotesCreate/>}/>
        </Routes> */}
        </div>
    </div>
  );
}

export default App;
