
import { useState } from 'react';
import './Search.css';
import useDebounce from '../../customHooks/useDebounce';

function Search({ updateSearchQuery }){
	
 const debouncedCallback= useDebounce((e)=>updateSearchQuery(e.target.value));

  return (
  	<div className="search-wrapper">
  		 <input type="search" placeholder="enter user name e.g. RitikY2005" name="search-term" 
   		 onChange={(e)=>debouncedCallback(e)}
  		 />


  	</div>
  	)
}

export default Search;