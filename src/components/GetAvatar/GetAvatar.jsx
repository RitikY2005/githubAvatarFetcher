import { useEffect, useState } from "react";
import useAvatar from "../../customHooks/useAvatar";
import './GetAvatar.css';
import Loader from "../Loader/Loader";


function GetAvatar({ userName }) {

     const [offset,setOffset]=useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUrl = (userName,offset) =>{
    	 return `https://api.github.com/search/users?q=${userName}+in:login&per_page=10&page=${offset}`;
    }
    


    async function updateUsers(userName,offset) {
    	const url= getUrl(userName,offset);
        console.log(`searching result for htis url --`, url);
        setLoading(true);
        const arr = await useAvatar(url);
        console.log('arr', arr);
        setUsers(arr);
        setLoading(false);
    }

   useEffect(()=>{
     setOffset(1);
   },[userName]);



    useEffect(() => {
        updateUsers(userName,offset);
    }, [offset]);

  

    if (loading) {
        return <Loader h={40}/>
    }

    return ( 
    	<>

        <div className="avatar-card-container"> 
          
          {
          	users.map((user)=>{ return (
          		<div className={`avatar-card`} key={user.name}>
          			 <a href={user.page} target="_blank" >
          			 	<img src={user.avatar_url} alt="user avatar" />
          			 	<span className="user-name"> {user.name} </span>
          			 </a>
          		</div>
          		)
          	})
          }



  	     </div>
        
         {(users.length>0) && (

         	<div className="pagination-controls">
          	<button 
          	 onClick={()=>setOffset((offset)=>offset+1)} 
             disabled={offset>=Math.ceil(users[0].total_count/offset)}>
             Next
             </button>
          </div>

          )}
      
          




        </>
        )

    }

    export default GetAvatar;