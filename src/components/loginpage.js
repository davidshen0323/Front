// import React,{Component} from 'react';
// import MyMenu from './Menu';
// import Button from '@material-ui/core/Button';
// import {makeStyles} from '@material-ui/core/styles';
// import Logo from './logo.js';
// //import {List,InputItem} from 'antd-mobile';

// //import WingBlank from 'antd-mobile';
// //import WhiteSpace from 'antd-mobile';

// import Paper from '@material-ui/core/Paper';
// import {Link} from "react-router-dom";


// import {Form,Input,Icon} from 'antd';
// //import '../node_modules/antd/dist/antd.css'//不引入這個檔案那麼不顯示antd的樣式

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
    
// /*------------ STYLE ------------*/
// const useStyles = makeStyles(theme =>({
    
//         button: {
//             margin: theme.spacing(2),
//         },

//         root:{
//             width: '70%',
//             marginTop: theme.spacing(5),
//             marginLeft: theme.spacing(25),
//             overflowX: 'auto',
//             textAlign: 'center',  
//         },
        
//         inputitem: {
//             textAlign:'center',
//         },
//     }
//     ));
// /*--------------------------------*/



// export default function LoginPage(){
//         const classes = useStyles();
//         const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
//         const userNameError = isFieldTouched('userName') && getFieldError('userName');
//         const passWordError = isFieldTouched('password') && getFieldError('password');
//         return (
//             <div>
//                 <MyMenu/>
//                 <Logo/>
//                 <Paper className={classes.root}>
//                 <h2>我是登入頁</h2>
               
//                 <Form onSubmit={this.handleSubmit}>
//                         {/* 一個FromItem中放一個被 getFieldDecorator 裝飾過的 child */}
                       
//                         <Form.Item
//                             validateStatus={userNameError ? 'error' : ''}//validateStatus為校驗狀態，如不設定，則會根據校驗規則自動生成，可選：'success' 'warning' 'error' 'validating'
//                         >
//                         {
//                             getFieldDecorator('userName',{
//                                 rules:[{required:true,message:"Please input your username!"}]
//                             })(
//                                 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
//                                         placeholder="Username"
//                                 />
//                             )
//                         }
//                         </Form.Item>
                       
                       
//                         <Form.Item
//                             validateStatus={passWordError ? "error" : ''}
//                         >
//                         {
//                             getFieldDecorator('passWord',{
//                                 rules:[{required:true,message:"Please input your Password!"}]
//                             })(
//                                 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
//                                         placeholder="Password"
//                                 />
//                             )
//                         }
//                         </Form.Item>
//                     </Form>
                    
                    
//                     <Button variant="contained" color="primary" component={Link}
//               to ='/homepage1' className={classes.button}>
//                     登入
//                     </Button>
                    
//                     <Button variant="contained" color="primary" component={Link}
//               to ='/register' className={classes.button}>
//                     註冊
//                     </Button>
                
                
//                 </Paper>
                
//             </div>
//         )
//     }
