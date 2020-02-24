import React,{Component} from 'react';
import Logo from './logo.js';
import MyMenu from './Menu';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile'
//import {connect} from 'react-redux'
//import {register} from '../../redux/user.redux'
//import '../../index.css'

//@connect(
//    state => state.user,
//    {register}
//)
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'worker',
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    //呼叫redux/user.redux中的register方法，判斷是否可以註冊
    handleRegister(){
        this.props.register(this.state)
        // console.log(this.state);
    }
    //監控輸入框的變化，及時更新state中的值
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
}
    const useStyles = makeStyles(theme =>({
    
        button: {
            width:'20%',
        },
        

        root:{
            width: '70%',
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(24),
            overflowX: 'auto',
            textAlign: 'center',  
        },
        inputitem: {
            textAlign:'center',
        },
    }
    ));





    export default function ContainedButtons(){
        const RadioItem = Radio.RadioItem;
        const classes = useStyles();
        const [value, setValue] = React.useState('student');
        const handleChange = event => {
    setValue(event.target.value);
  };
        return (
            <div>
                <MyMenu/>
                <Logo></Logo>
                <Paper className={classes.root}>
                <h2>我是註冊頁呦!</h2>
                <WingBlank>
                    <List>
                        <InputItem>帳號</InputItem>
                        <InputItem  type="password">密碼</InputItem>
                        <InputItem  type="password">確認密碼</InputItem>
                    </List>
                    <whiteSpace></whiteSpace>    
                    <List>
                    <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>                    <FormControlLabel
                        value="student"
                        control={<Radio color="primary" align="center" />}
                        label="學生"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                    value="teacher"
                    control={<Radio color="primary" align="center" />}
                    label="老師"
                    labelPlacement="end"
                    />
                    </RadioGroup>




                    </List>
                    <WhiteSpace/>
                    <Button variant="contained" color="primary" href="login" className={classes.button}>註冊</Button>
                    <WhiteSpace/>
                </WingBlank>
                </Paper>
            </div>
        )
    }


//export default Register