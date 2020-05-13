import React , { useEffect } from 'react';
import axios from 'axios';


export default function Loading() {
  
    
  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/CheckUserRoleInJSONReturn/`);
   
        console.log(result.data);
        Jump(result.data);
    }
    fetchData();
    
}, []);

  function Jump(data){
    console.log(data)
        if( data["user_role"] === 0){
            window.location.href = "/homepages";
        }
        else{
          console.log(data["user_role"]);
            window.location.href = "/homepaget";            
        }
  }
 


  return (
    <div>   
      
        LOADING....
        
    </div>
  );
}