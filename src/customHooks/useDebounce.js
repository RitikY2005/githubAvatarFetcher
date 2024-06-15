
function useDebounce(updateCallback,delay=2000){

  let timer ;

  return (updateValue)=>{
  	 clearTimeout(timer);

  	 timer= setTimeout(()=>{
             
             updateCallback(updateValue);

  	 },delay)
  }

}

export default useDebounce;