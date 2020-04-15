import React,{Component} from 'react';
import MyMenu from './MenuisLogouted';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './logo.js';
import {List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";



import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { ListItemAvatar, TextField } from '@material-ui/core';
//import Image from '@material-ui-image' ;
// class Login extends Component{
//     constructor(props){
//         super(props);
//         //繫結this時間，如果不繫結，無法傳遞this
//         this.register = this.register.bind(this);
//     }
//     register(){
//         console.log(this.props);
//         //跳轉到註冊頁面
//         this.props.history.push('/register')
//     }
// }
    
/*------------ STYLE ------------*/
const useStyles = makeStyles(theme =>({
    
        button: {
            margin: theme.spacing(1),
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            width:'120px',
            fontFamily: 'Microsoft JhengHei',
            color: "white",
            backgroundColor: "#003060",
            fontWeight:'bold',
        },

        margin: {
            margin: theme.spacing(1),
            fontFamily: 'Microsoft JhengHei',
            
          },

        root:{
            width: '70%',
            marginTop: theme.spacing(12),
            // marginBottom: theme.spacing(12),
            //marginLeft: theme.spacing(25),
            overflow: 'auto',
            textAlign: 'center',
            fontFamily: 'Microsoft JhengHei',
            color: '#003060',
            backgroundColor: 'white',
        },

        div: {
            // backgroundColor:'#E0E0E0',
            
            height: '100vh',
        },

        TextField:{
            textAlign:'center',
            backgroundColor:'#BEBEBE',
          },
          
          StyleSheet:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
          },
        
    }
    ));
/*--------------------------------*/



export default function Login(){

        const classes = useStyles();
        const [inputs, setInputs] = React.useState({
            Userid: '',
            Userpassword: ''
          });

          const handleChange = user => event => {
            event.persist();
            setInputs(inputs => ({...inputs, [user]: event.target.value }));
          }
          
          let login;
          const handleSubmit = () =>
          {
            if(inputs.Userid.length > 0 && inputs.Userpassword.length > 0)
            {
                login = true;
                return login;
            }
            else
            {
                alert("請再次確認!");
                login = false;
                return login;
            }
          }


        //   const handleClickShowPassword = () => {
        //     setValues({ ...values, showPassword: !values.showPassword });
        //   };
        
        //   const handleMouseDownPassword = event => {
        //     event.preventDefault();
        //   };

        return (
            <div className={classes.div}>
                <MyMenu/>
                
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                
                >
                <Paper className={classes.root}>
                    <h2>上課應用系統</h2>

        {/* <form action="/login" method="POST"> 
          
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
            
          </form> */}

                {/* <div> */}
                     {/* <Logo/> */}
                {/* </div> */}
                







        <WingBlank>

        <form action="/login" method="POST"> 
        <List>
             
        <FormControl className={clsx(classes.margin)}>
            {/* <InputLabel htmlFor="outlined-adornment-account">帳號</InputLabel> */}
          
          <TextField 
            id="username"
            label="學號"
            name="username"
            value={inputs.Userid}
            onChange={handleChange('Userid')}
            size="small"
            variant="outlined"
            />
          
{/*           
          <Button
          // onClick={handleSubmit}
          type="submit"
          variant="contained">Submit</Button>
        */}
        </FormControl>

        </List>

        <List>
                        
        <FormControl className={clsx(classes.margin)} variant="outlined" size="small">
            {/* <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel> */}
            <TextField 
                id="password"
                label="密碼"
                type="password"
                name="password"
                value={inputs.Userpassword}
                onChange={handleChange('Userpassword')}
                size="small"
                variant="outlined"
            />
          
                    </FormControl>
      

                    </List>
                    
                    
                    <WhiteSpace/>
                    <Button 
                    type="submit"
                    variant="contained" 
                    className={classes.button}
                    onClick={handleSubmit}>
                    登入
                    </Button>
                    
                    </form> 
                    </WingBlank>

                    <Button
                    variant="contained"
                    component={Link}
                    to='/register'
                    className={classes.button}
                    >
                    註冊
                    </Button>

                </Paper>
                </Grid>
            </div>
        )
    }


//export default Login
