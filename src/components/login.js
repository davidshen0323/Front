import React,{Component} from 'react';
import MyMenu from './Menu';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './logo.js';
import {List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import homepage1 from "./Homepage1";

<<<<<<< HEAD

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
import { ListItemAvatar } from '@material-ui/core';
=======
>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c
class Login extends Component{
    constructor(props){
        super(props);
        //繫結this時間，如果不繫結，無法傳遞this
        this.register = this.register.bind(this);
    }
    register(){
        console.log(this.props);
        //跳轉到註冊頁面
        this.props.history.push('/register')
    }
}
<<<<<<< HEAD
    
/*------------ STYLE ------------*/
const useStyles = makeStyles(theme =>({
    
        button: {
            margin: theme.spacing(2),
            width:'120px',
        },

        margin: {
            margin: theme.spacing(1),
          },

        root:{
            width: '70%',
            marginTop: theme.spacing(5),
            //marginLeft: theme.spacing(25),
            overflow: 'auto',
            textAlign: 'center',  
        },

        TextField:{
            textAlign:'center',
        },
        
    }
    ));
/*--------------------------------*/
=======
    const useStyles = makeStyles(theme =>({
    
        button: {
            margin: theme.spacing(2),
        },
        root:{
            width: '70%',
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(25),
            overflowX: 'auto',
            textAlign: 'center',  
        },
        inputitem: {
            textAlign:'center',
        },
    }
    ));

>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c



export default function ContainedButtons(){
        const classes = useStyles();
<<<<<<< HEAD
        const [values, setValues] = React.useState({
            amount: '',
            password: '',
            showPassword: false,
          });

          const handleChange = prop => event => {
            setValues({ ...values, [prop]: event.target.value });
          };
        
          const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
          };
        
          const handleMouseDownPassword = event => {
            event.preventDefault();
          };

        return (
            <div>
                <MyMenu/>

                <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Paper className={classes.root}>
                    <h2>我是登入頁</h2>
                <List>
                    <ListItemAvatar><Logo/></ListItemAvatar>
                
                </List>
                <WingBlank>

                    <List>
             
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
                        <InputLabel htmlFor="outlined-adornment-account">帳號</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-account"
                            value={values.account}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton color="inherit" edge="end">
                                <AccountCircle />
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={50}
                        />
                    </FormControl>

                    </List>

                    <List>
                        
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
                        <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton color="inherit"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={50}
                        />
                    </FormControl>
      

                    </List>
                    
                    
                    <WhiteSpace/>
                    <Button variant="contained" color="primary" component={Link} to ='/homepage1' className={classes.button}>
                    登入
                    </Button>
                    
                    <Button variant="contained" color="primary" component={Link} to ='/register' className={classes.button}>
                    註冊
                    </Button>

                </WingBlank>
                </Paper>
                </Grid>
=======
        return (
            <div>
                <MyMenu/>
                <Logo/>
                <Paper className={classes.root}>
                <h2>我是登入頁</h2>
                <WingBlank>
                    <List>
                        <InputItem >帳號</InputItem>
                        <InputItem  type="password">密碼</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button variant="contained" color="primary" component={Link}
              to ='/homepage1' className={classes.button}>
                    登入
                    </Button>
                    
                    <Button variant="contained" color="primary" component={Link}
              to ='/register' className={classes.button}>
                    註冊
                    </Button>
                </WingBlank>
                </Paper>
>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c
            </div>
        )
    }


//export default Login