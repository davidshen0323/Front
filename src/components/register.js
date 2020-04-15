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

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MyMenu from './MenuisLogouted';
import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
// import Logo from './logo.js';
import {List} from 'antd-mobile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import {useHistory, Link} from "react-router-dom";




const useStyles = makeStyles(theme =>({
    
            div: {
                // backgroundColor:'#E0E0E0',
                height: 800,
            },

            button: {
                
                fontFamily: 'Microsoft JhengHei',
                margin: 'auto',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                color: "white",
                backgroundColor: "#003060",
                fontWeight:'bold',
            },
            
            margin: {
                // margin: theme.spacing(3),
                fontFamily: 'Microsoft JhengHei',

              },
              
            textfield: {
                marginBottom: 10,
                backgroundColor: 'lightgray',
                fontFamily: 'Microsoft JhengHei', //沒用

            },
            
            root:{
                width: '70%',
                marginTop: 100,
                margin: 'auto',
                marginBottom: 100,
                overflowX: 'auto',
                textAlign: 'center',
                justifyContent: 'center',  
                fontFamily: 'Microsoft JhengHei',
                fontWeight: 'bold',
                color: '#003060',
                
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
        //宣告要接值的變數
    });

      

    const handleChange = fieldname => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
        //
    }

    let post; //宣告一個布林值變數
    let history = useHistory(); //傳值跳頁的方法
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
            && inputs.repeatpwd === inputs.pwd) //每個輸入格都不為空值、驗證密碼等於密碼
            {
                fetch('/student_re',{
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
                        std_phone: inputs.phone,
                        std_mail: inputs.mail
                    })
                })
                .then(res => {
                    
                    async function fetchres(){
                    const test = await res.text();  //接收後端傳來的訊息
                    if (test === "This account has already exist!") //帳號已註冊過
                    {
                        alert("已註冊過!");
                        post = false;
                        console.log(1);
                        return post;
                    }
                    else if(test === "request failed. Email format error!") //信箱不包含@
                    {
                        alert("信箱格式有誤! 請輸入有效信箱!");
                        post = false;
                        console.log(2);
                        return post;
                    }
                    else if(inputs.user.length !== 9) //學號長度不等於9
                    {
                        alert("學號長度有誤! 請再次確認!");
                        post = false;
                        console.log(3);
                        return post;
                    }
                    else
                    {
                        alert("註冊成功!");
                        post = true;
                        console.log(0);
                        history.push("/login");
                        return post;                        
                    }
                    
                } fetchres() })
                // .then(res => console.log(post))
                .then(res => console.log(res))
                .catch(err => console.log(`Error with message: ${err}`))
            }
            
            else
            {
                alert("請再次確認!!")
            }

            

            
            
        }
        // console.log(post);

        
        return (
            <div className={classes.div}>
            <MyMenu/>
            
            <Paper className={classes.root}>
                 <h2>註冊</h2>
                 

                
                
                <List>
                
             
            <FormControl className={clsx(classes.margin)} variant="outlined" size="small">
            
             
            <TextField
                required
                id="user"
                label="學號"
                value={inputs.user}
                onChange={handleChange('user')}
                className={classes.textfield}
                size="small"
                variant="outlined"
            />

            <TextField
                required
                id="pwd"
                label="密碼"
                type="password"
                value={inputs.pwd}
                onChange={handleChange('pwd')}
                className={classes.textfield}
                size="small"
                variant="outlined"
            />

            <TextField
                required
                id="repeatpwd"
                label="請再次輸入密碼"
                type="password"
                value={inputs.repeatpwd}
                onChange={handleChange('repeatpwd')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />

            

            <TextField
                required
                id="name"
                label="姓名"
                value={inputs.name}
                onChange={handleChange('name')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />
            
            <TextField
                required
                id="gender"
                label="性別"
                value={inputs.gender}
                onChange={handleChange('gender')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />

            <TextField
                required
                id="dpart"
                label="系所班級"
                value={inputs.dpart}
                onChange={handleChange('dpart')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />

            <TextField
                required
                id="phone"
                label="電話號碼"
                value={inputs.phone}
                onChange={handleChange('phone')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />

            <TextField
                required
                id="mail"
                label="電子郵件"
                value={inputs.mail}
                onChange={handleChange('mail')}
                size="small"
                variant="outlined"
                className={classes.textfield}
            />
                </FormControl>
                </List>

              <Button 
              className={classes.button}
              onClick={handleSubmit}
              variant="contained"
            //   component={Link}
            //   to='/login'
              >確認送出
              </Button>

            <Button 
              className={classes.button}
            //   onClick={handleSubmit}
              variant="contained"
              component={Link}
              to='/login'
              >返回
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