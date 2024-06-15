 
 import './Loader.css';

function Loader({ w=100,h=100,bg="transparent" }){

 return (
 
  <div className="loader-wrapper" style={
  	 {
      width:`${w}%`,
  	  height:`${h}vh`,
  	  backgroundColor:`${bg}`,
  	  display:"flex",
  	  justifyContent:"center",
  	  alignItems:"center"
  	   }
  } >
  	    <div className="loader"></div>
  </div>

)
}

export default Loader;