import React , { useEffect, useState } from 'react';
import axios from 'axios';
import gifloading from '../img/Spinner-1s-200px.gif';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";


export default function Loading() {
  
  // const [error, setError] = useState(false);
    
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
        else if( data["user_role"] === 1){
          console.log(data["user_role"]);
            window.location.href = "/homepaget";            
        }
        else{
          // setError(true);
          window.location.href ="/";
        }
  }
 

  //   function Alert(props) {
  //     return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }

  return (
    <div>   
        <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
        >

        <img src={gifloading}/>
        LOADING....
        </Grid>
{/* 
        <Snackbar open={error} autoHideDuration={2000} style={{ marginBottom: 100 }}>
                <Alert severity="error">
                    請再次確認！
                </Alert>
            </Snackbar> */}
    </div>
  );
}