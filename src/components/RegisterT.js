import React from 'react';
import {Button, TextField, Paper} from '@material-ui/core/';
import MyMenu from './MenuisLogouted';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import Logo from './logo.js';
import {List} from 'antd-mobile';
import clsx from 'clsx';
import {useHistory, Link} from "react-router-dom";

const useStyles = makeStyles(theme =>({
    
            div: {
                background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
                height: 800,
            },

            button: {
                
                fontFamily: 'Microsoft JhengHei',
                margin: 'auto',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                color: "white",
                backgroundColor: "#f8b62b",
                fontWeight:'bold',
            },
            
            margin: {
                // margin: theme.spacing(3),
                fontFamily: 'Microsoft JhengHei',

              },
              
            textfield: {
                marginBottom: 10,
                //backgroundColor: 'lightgray',
                fontFamily: 'Microsoft JhengHei', //沒用

            },
            
            root:{
                width: '70%',
                // marginTop: 100,
                margin: 'auto',
                marginBottom: 100,
                overflowX: 'auto',
                textAlign: 'center',
                justifyContent: 'center',  
                fontFamily: 'Microsoft JhengHei',
                fontWeight: 'bold',
                color: '#582707',
                
            },
            
        }
        ));

export default function RegisterT() {
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
                fetch('/teacher_re',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        teacher_id: inputs.user,
                        teacher_password: inputs.pwd,
                        teacher_name: inputs.name,
                        teacher_gender: inputs.gender,
                        teacher_department: inputs.dpart,
                        teacher_phone: inputs.phone,
                        teacher_mail: inputs.mail
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
                    else if(inputs.user.length !== 5) //學號長度不等於9
                    {
                        alert("帳號長度有誤! 請再次確認!");
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
            {/* <MyMenu/> */}
            
            <Paper className={classes.root}>
                 <h2>註冊</h2>
                 

                
                
                <List>
                
             
            <FormControl className={clsx(classes.margin)} variant="outlined" size="small">
            
            
            <TextField
                required
                id="user"
                label="帳號"
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
                label="授課系所"
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
