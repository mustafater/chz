
import React from 'react'
import  {categories}  from '../app/utils/linkconstants';
import fetchLists from '@/lib/fetchLists'
import NewList from '../app/components/NewList';
import response from '@/response.json'

//import response from '../response.json'
 async function  Homepage() {
    // fetch new data
    //const List:NewResponse= await fetchLists(categories.join(','))
    const  news:NewResponse =response || await fetchLists(categories.join(","));
   
   
return(
    
    
    <div>
     <NewList  news={news}/>
    </div>   
    
    
)
    
 
  
}

export default Homepage