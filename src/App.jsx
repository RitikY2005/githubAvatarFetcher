import Search from "./components/Search/Search"
import './App.css';
import { useState } from "react";
import GetAvatar from "./components/GetAvatar/GetAvatar";
import Loader from "./components/Loader/Loader";

function App() {
 
const [searchQuery,setSearchQuery]= useState('');




  return (
    <>
      <h1 className="search-header">AvatarFetch</h1>
      <Search updateSearchQuery= {setSearchQuery} />
        
        {(!searchQuery)?(<h3 style={{textAlign:"center"}}>Type USERNAME in the search box</h3>): (<GetAvatar userName={searchQuery} offset={0} limit={10}/> )}
   

       
    </>
  )
}

export default App
