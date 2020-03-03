import React,{Component} from 'react';
import MyMenu from './MenuisLogouted';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './logo.js';
import {List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import homepage1 from "./Homepage1";

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




export default function ContainedButtons(){
        const classes = useStyles();
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
            </div>
        )
    }


//export default Login