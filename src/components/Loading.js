import React , { useEffect } from 'react';
import axios from 'axios';
import {useHistory, Link} from "react-router-dom";


export default function Loading() {
  
    // const [userrole,setUserRole] =React.useState({user_role:0});   
    
  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/CheckUserRoleInJSONReturn/`);
        //setUserRole(0);
        // setUserRole(result.data);
        console.log(result.data);
        Jump(result.data);
    }
    fetchData();
    
}, []);
//console.log(userrole);
// const X = userrole.user_role;
// console.log(X);

  // useEffect(() => {
  //   async function fetchData() {

  //     const result  = await axios.get(`/CheckUserRole/`)
      
  //     setUserRole(result.data);
  //     console.log(result);
  //     console.log(result.data);
  //     // console.log(result.data[0]['user_role']);
      
  //     // const path ={result.data['cs_id']}
  //   }
    
  //   fetchData().then(res=>{
  //     function fetchres(){
  //    // const test = await res.text();  //接收後端傳來的訊息
  //     if (res.text() === "0") 
  //     {
  //       //window.location.href = "/homepages";
  
  //        history.push("/homepages");
  //     }
  //     else if(res.text() === "1") 
  //     {
  //         history.push("/homepaget");
  //     }
  //   }fetchres()});
  // }, []);

  // let history = useHistory(); //傳值跳頁的方法
  
  function Jump(data){
    console.log(data)
        if( data["user_role"] === 0){
            window.location.href = "/homepages";
            // return(history.push("/homepages"));
        }
        else{
          console.log(data["user_role"]);
            window.location.href = "/homepaget";
            
            // return(history.push("/homepaget"));
        }
        
  }
 


  return (
    <div>   
      
        LOADING....
        
       {/* { userrole["user_role"]== undefined ? window.location.href = "/homepaget" : window.location.href = "/homepages"} */}
        {/* <Jump/> */}
    </div>
  );
}