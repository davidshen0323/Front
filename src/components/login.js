import React from 'react';
import MyMenu from './MenuisLogouted';
import {makeStyles} from '@material-ui/core/styles';
import {WingBlank} from 'antd-mobile';
import {Link} from "react-router-dom";
import {Button, Grid, List, Paper, FormControl, TextField} from '@material-ui/core/';
import clsx from 'clsx';
import ForgetPw from './forgetpw';

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
            width:'100px',
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
            width: '80%',
            height:'60vh',
            marginTop: theme.spacing(12),
            marginBottom: theme.spacing(12),
            //marginLeft: theme.spacing(25),
            overflow: 'auto',
            textAlign: 'center',
            fontFamily: 'Microsoft JhengHei',
            color: '#003060',
            backgroundColor: 'white',
        },

        div: {
            height: '100vh',
            width: '100%',
        background: 'linear-gradient(0deg,#bed8d4  0%,  #fffaea 100%)',

        },

        TextField:{
            textAlign:'center',
            backgroundColor:'#BEBEBE',
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

          const handleChange = fieldname => event => {
            event.persist();
            setInputs(inputs => ({...inputs, [fieldname]: event.target.value }));
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


        <WingBlank>

        <form action="/login" method="POST"> 

        <List>     
        <FormControl className={clsx(classes.margin)}>

          <TextField 
            id="username"
            label="學號"
            name="username"
            value={inputs.Userid}
            onChange={handleChange('Userid')}
            size="small"
            variant="outlined"
            />
        </FormControl>
        </List>

        <List>          
        <FormControl className={clsx(classes.margin)} >
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
                    
                    
                    {/* <WhiteSpace/> */}
        <List>
                    <Button
                    variant="contained"
                    component={Link}
                    to='/register'
                    className={classes.button}
                    >
                    註冊
                    </Button>
                    

                    <Button 
                    type="submit"
                    variant="contained" 
                    className={classes.button}
                    onClick={handleSubmit}>
                    登入
                    </Button>
                    <ForgetPw className={classes.button}/>
    </List>
    </form> 
    </WingBlank>
                </Paper>
                </Grid>
            </div>
        )
    }



