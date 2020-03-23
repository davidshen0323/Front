// import React,{ useState, Component} from 'react';
// import MyMenu from './Menu';
// import Button from '@material-ui/core/Button';
// import {makeStyles} from '@material-ui/core/styles';
// import Logo from './logo.js';
// import {List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile';
// import Paper from '@material-ui/core/Paper';

// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// import FormControl from '@material-ui/core/FormControl';
// import clsx from 'clsx';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import { ListItemAvatar, TextField } from '@material-ui/core';

// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
//import {connect} from 'react-redux'
//import {register} from '../../redux/user.redux'
//import '../../index.css'

//@connect(
//    state => state.user,
//    {register}
//)

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MyMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
// import Logo from './logo.js';
import {List} from 'antd-mobile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import {Link, Redirect, useHistory} from "react-router-dom";


// import { OutlinedInput } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';

// import useSignUpForm from './CustomHook';

// const useStyles = makeStyles(theme => ({
//     menu: {
//         marginBottom: 'auto',
//     }
// }))

const useStyles = makeStyles(theme =>({
    
            button: {
                width:'30%',
            },
            
            margin: {
                margin: theme.spacing(3),
              },
              
            textfield: {
                marginBottom: 10,
                backgroundColor: 'lightgray'
            },
            
            root:{
                width: '70%',
                margin: 'auto',
                overflowX: 'auto',
                textAlign: 'center',  
            },
            
        }
        ));

export default function Register() {
    const classes = useStyles();

    const [inputs, setInputs] = React.useState({
        user:'',
        pwd:'',
        repeatpwd:'',
        name:'',
        gender:'',
        dpart:'',
        phone:'',
        mail:''

    });

      

    const handleChange = user => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [user]: event.target.value}));

    }

    let post;
    let history = useHistory();
    const handleSubmit = () =>
    {
        if(inputs.user.length > 0 
            && inputs.user.length > 0 
            && inputs.pwd.length > 0
            && inputs.repeatpwd.length > 0
            && inputs.name.length > 0
            && inputs.gender.length > 0
            && inputs.dpart.length > 0
            && inputs.phone.length > 0
            && inputs.mail.length > 0
            && inputs.repeatpwd === inputs.pwd)
            {
                fetch('/student',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        std_id: inputs.user,
                        std_password: inputs.pwd,
                        std_name: inputs.name,
                        std_gender: inputs.gender,
                        std_department: inputs.dpart,
                        std_mail: inputs.mail
                    })
                })
                .then(res => {
                    if (res.status === 500)
                    {
                        alert("已註冊過!")
                        post = false;
                        console.log(1);
                        return post;
                    }
                    else
                    {
                        
                        post = true;
                        console.log(0);
                        history.push("/login");
                        return post;                        
                    }
                    
                })
                // .then(res => console.log(post))
                .then(res => console.log(res))
                .catch(err => console.log(`Error with message: ${err}`))

                
                // if(post===true)
                // {
                // }
                // else
                // {
                //      console.log(2);
                //     return null;
                // }
                
            }
            
            else
            {
                alert("請再次確認!!")
            }

            

            
            
        }
        // console.log(post);

        
        return (
            <div>
            <MyMenu/>
            
            <Paper className={classes.root}>
                 <h2>註冊</h2>
                 <Grid>

                    {/* <Logo/>   */}
                 </Grid>
                <List>
                
             
            <FormControl className={clsx(classes.margin)} variant="outlined" size="small">
            
             
            <TextField
                required
                id="user"
                label="user"
                value={inputs.user}
                onChange={handleChange('user')}
                variant="filled"
                className={classes.textfield}
            />

            <TextField
                required
                id="pwd"
                label="pwd"
                type="password"
                value={inputs.pwd}
                onChange={handleChange('pwd')}
                variant="filled"
                className={classes.textfield}
            />

            <TextField
                required
                id="repeatpwd"
                label="repeatpwd"
                type="password"
                value={inputs.repeatpwd}
                onChange={handleChange('repeatpwd')}
                variant="filled"
                className={classes.textfield}
            />

            

            <TextField
                required
                id="name"
                label="name"
                value={inputs.name}
                onChange={handleChange('name')}
                variant="filled"
                className={classes.textfield}
            />
            
            <TextField
                required
                id="gender"
                label="gender"
                value={inputs.gender}
                onChange={handleChange('gender')}
                variant="filled"
                className={classes.textfield}
            />

            <TextField
                required
                id="dpart"
                label="dpart"
                value={inputs.dpart}
                onChange={handleChange('dpart')}
                variant="filled"
                className={classes.textfield}
            />

            <TextField
                required
                id="phone"
                label="phone"
                value={inputs.phone}
                onChange={handleChange('phone')}
                variant="filled"
                className={classes.textfield}
            />

            <TextField
                required
                id="mail"
                label="mail"
                value={inputs.mail}
                onChange={handleChange('mail')}
                variant="filled"
                className={classes.textfield}
            />
              
              </FormControl>
  
                </List>




              <Button 
              
              onClick={handleSubmit}
              variant="contained"
            //   component={Link}
            //   to='/login'
              >確認送出
              </Button>
            
            
            
              </Paper>

            
              
        </div>
        
    );

}

// export default Register


// class Register extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             user:'',
//             pwd:'',
//             repeatpwd:'',
//             name:'',
//             gender:'',
//             dpart:'',
//             phone:'',
//             mail:'',
//         }
//         this.handleRegister = this.handleRegister.bind(this)
//     }
//     //呼叫redux/user.redux中的register方法，判斷是否可以註冊
//     handleRegister(){
//         this.props.register(this.state)
//         // console.log(this.state);
//     }
//     //監控輸入框的變化，及時更新state中的值
//     handleChange(key,val){
//         this.setState({
//             [key]:val
//         })
//     }
// }

// /*------------ STYLE ------------*/
//     const useStyles = makeStyles(theme =>({
    
//         button: {
//             width:'30%',
//         },
        
//         margin: {
//             margin: theme.spacing(1),
//           },

//         root:{
//             width: '70%',
//             marginTop: theme.spacing(5),
//             marginLeft: theme.spacing(24),
//             overflowX: 'auto',
//             textAlign: 'center',  
//         },
//         inputitem: {
//             textAlign:'center',
//         },
//     }
//     ));
// /*--------------------------------*/

//     export default function ContainedButtons(){
//         const RadioItem = Radio.RadioItem;
//         const classes = useStyles();
//         const [value, setValue] = React.useState('student');
//         //const handleChange = event => {
//     //setValue(event.target.value);
//   //};
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     surepassword: '',
//     showPassword: false,
//     showsurePassword: false,
//   });

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };



//   const handleClickShowSurePassword = () => {
//     setValues({ ...values, showsurePassword: !values.showsurePassword });
//   };

//   const handleMouseDownSurePassword = event => {
//     event.preventDefault();
//   };

//         return (
//             <div>
//                 <MyMenu/>
                
//                 <Paper className={classes.root}>
//                 <h2>我是註冊頁呦!</h2>
//                 <Logo/>
//                 <WingBlank>
//                 <List>
             
//              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
//                  <InputLabel htmlFor="outlined-adornment-account">帳號</InputLabel>
//                  <OutlinedInput
//                      id="outlined-adornment-account"
//                      value={values.account}
//                      endAdornment={
//                      <InputAdornment position="end">
//                          <IconButton color="inherit" edge="end">
//                          <AccountCircle />
//                          </IconButton>
//                      </InputAdornment>
//                      }
//                      labelWidth={50}
//                  />
//              </FormControl>

//              </List>

//              <List>
                 
//              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
//                  <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
//                  <OutlinedInput
//                      id="outlined-adornment-password"
//                      type={values.showPassword ? 'text' : 'password'}
//                      value={values.password}
//                      onChange={handleChange('password')}
//                      endAdornment={
//                      <InputAdornment position="end">
//                          <IconButton color="inherit"
//                          onClick={handleClickShowPassword}
//                          onMouseDown={handleMouseDownPassword}
//                          edge="end">
//                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                          </IconButton>
//                      </InputAdornment>
//                      }
//                      labelWidth={50}
//                  />
//              </FormControl>


//              </List>
//              <List>
                 
//              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
//                  <InputLabel htmlFor="outlined-adornment-surepassword">確認密碼</InputLabel>
//                  <OutlinedInput
//                      id="outlined-adornment-surepassword"
//                      type={values.showsurePassword ? 'text' : 'surepassword'}
//                      value={values.surepassword}
//                      onChange={handleChange('surepassword')}
//                      endAdornment={
//                      <InputAdornment position="end">
//                          <IconButton color="inherit"
//                          onClick={handleClickShowSurePassword}
//                          onMouseDown={handleMouseDownSurePassword}
//                          edge="end">
//                          {values.showsurePassword ? <Visibility /> : <VisibilityOff />}
//                          </IconButton>
//                      </InputAdornment>
//                      }
//                      labelWidth={50}
//                  />
//              </FormControl>


//              </List>
                   
//                     <whiteSpace />   
                    
                    
                    
//                     <List>
//                     <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row class="am-list-item-middle">                    <FormControlLabel
//                         value="student"
//                         control={<Radio color="primary" align="center" />}
//                         label="學生"
//                         labelPlacement="end"
//                     />
//                     <FormControlLabel
//                     value="teacher"
//                     control={<Radio color="primary" align="center" />}
//                     label="老師"
//                     labelPlacement="end"
//                     />
//                     </RadioGroup>
//                     </List>



//                     <WhiteSpace/>
//                     <Button variant="contained" color="primary" href="login" className={classes.button}>註冊</Button>
//                     <WhiteSpace/>
//                 </WingBlank>
//                 </Paper>
//             </div>
//         )
//     }


//export default Register