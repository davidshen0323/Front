
import React from 'react';
// import axios from 'axios';
// import { apiUserinfo } from './api';
// import useSignUpForm from './CustomHooks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {Link} from "react-router-dom";


    
    
    // const [data, setData] = useState([]);


    const Post = () => {

     
        const [inputs, setInputs] = React.useState({
            Userid: '',
            Userpassword: ''
        });
        

        const handleChange = user => event => {
          event.persist();
          setInputs(inputs => ({...inputs, [user]: event.target.value}));
        }


        // const handleSubmit = () => 
        // {
          
          
        //     // event.preventDefault();
            
            
        //     fetch('/student/',{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         body: JSON.stringify({
        //             std_id: inputs.Userid,
        //             std_password: inputs.Userpassword
        //         })
        //     })
            
          
        // }


        return (
        <div>

          <form action="/login" method="POST"> 
          
          <TextField 
            id="username"
            label="Userid"
            name="username"
            value={inputs.Userid}
            onChange={handleChange('Userid')}
            />
          <TextField 
            id="password"
            label="Userpassword"
            type="password"
            name="password"
            value={inputs.Userpassword}
            onChange={handleChange('Userpassword')}
            />
          
          <Button
            // onClick={handleSubmit}
            
            type="submit"
            variant="contained">Submit</Button>
            
          </form>

        </div>
            );
      }

    export default Post