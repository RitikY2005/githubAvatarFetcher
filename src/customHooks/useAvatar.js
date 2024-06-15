import axios from "axios";

async function useAvatar(url){
 
 let avatarInfo=[];
 

  try{
 
   const response= await axios.get(url);

 // if user does not exist or if it;s a bad request then do this 

		 if (response.total_count==0){
		 	 avatarInfo=[]

		 return  avatarInfo;
		 }
   
   console.log(response);

    avatarInfo= response.data.items.map((user)=> {
    	 return {
    	 	name:user.login,
    	 	avatar_url:user.avatar_url,
    	 	page:user.html_url,
    	 	total_count:response.data.total_count


    	 }
    })
  

    

 console.log('avatar info--', avatarInfo)
    return   avatarInfo;
  } catch(err){
     console.log('something wrong in useAvatar.js',err);
     return avatarInfo;
  }


}



export default useAvatar;