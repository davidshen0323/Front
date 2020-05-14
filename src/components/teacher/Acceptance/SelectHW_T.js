import React , { useState, useEffect } from 'react';
import MyMenu from '../MenuT';
import { Button, Table, TableHead, TableBody, TableCell, TableRow,Box, ButtonBase, makeStyles, Grid, CardActionArea, Fab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import AddAccept from './addAcceptance';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import EditHW from './EditHW';

/*-------------------------------------------------------*/
const useStyles = makeStyles(theme => ({
  Paper:{
    width: '90%',
    margin: 'auto', 
    marginTop:'5%',   
    marginBottom:'5%',
    boxShadow:"1px 1px 1px 1px #9E9E9E",    
},
  backbut: {
    margin:'auto',
    marginTop: 30,
    fontFamily: 'Microsoft JhengHei',
    backgroundColor: '#E0E0E0',
  },
  button: {
    
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'120px',
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    backgroundColor: "#003060",
    fontWeight:'bold',
},
  selehw: {
    fontFamily: 'Microsoft JhengHei',
  },
  buttonbase: {
    width: '100%',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    backgroundColor:'#582707'
  },
  typo: {
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold'
  },
  div:{
    height:'100vh',
    background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
  },
}));

/*-------------------------------------------------------*/

export default function SelectHW_T() {
  //接值
  
  const classes = useStyles();

  const [Acc, setAcc] = React.useState([]);

  const acceptanceList = [ 'hw_name','hw_content', 'hw_createtime','hw_id' ]

  const params = useParams();
  const csid = params.cs_id;
  
  useEffect(() => {
    async function fetchData() {

      const result  = await axios.get(`/teacher/acceptance/${csid}`)
      
      setAcc(result.data);
      console.log(result.data);
    }
    fetchData();
  }, []);

  console.log(Acc);

  const deletHW=(event,id)=>{
    const hwIndex = Acc.findIndex(s=>s.hw_name=id)
    handleDelete(Acc[hwIndex])
    console.log('hwIndex',Acc[hwIndex])
  }

  const handleDelete = (Accept) =>
   {
     console.log('homework',Accept['hw_name'])
     console.log(params.cs_id)
        fetch(`/teacher/acceptance/deleteHomework`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              hw_name: Accept.hw_name,
              hw_cs_id: params.cs_id,
        })
       })
       window.location.reload();
      }


  const [openCreateHw, closeCreateHw] = React.useState(false);
  const onCloseCreateHw = () => {
    closeCreateHw(openCreateHw ? false : true);
  };  
  
  
  return (
    <div className={classes.div}>
      <MyMenu/>
      <Fab style={{color:'#ffffff'}} aria-label="add" className={classes.fab} onClick={() => closeCreateHw(true)}>
          <AddIcon />
        </Fab>
        <br/>
      <Typography className={classes.selehw} variant="h5" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%'}}>請選擇作業：</Typography>
      <Paper className={classes.Paper}>
          
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center" className={classes.typo}>作業名稱</TableCell>
                    <TableCell align="center" className={classes.typo}>內容</TableCell>
                    <TableCell align="center" className={classes.typo}>日期</TableCell>
                    <TableCell align="left" className={classes.typo}>編輯</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
              {Acc.map((Acc,index) => (
                <TableRow key={index}>
                 
                  {
                    acceptanceList.map( (list, i) => i < 3 ?
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      <ButtonBase className={classes.buttonbase} component={Link} to={`/acceptancet/${csid}/${Acc['hw_name']}`}>
                      {Acc[list]}      
                    </ButtonBase>
                      </TableCell>
                    :
                    <TableCell key={i} align="left">
                
                <EditHW 
                name={Acc['hw_name']} 
                content={Acc['hw_content']} 
                id={Acc['hw_id']}
                />

                <IconButton onClick={(e)=>deletHW(e,Acc.hw_name)}>
                 <DeleteIcon/>
               </IconButton>
                    </TableCell>
                      )
                    }
                    {/* </ButtonBase> */}
                </TableRow>
              ))}
             
            </TableBody>
          </Table>
      </Paper>
      <Grid
        container
        justify="center"
      >
      {/* <Button
      className={classes.button}
      component={Link}
      to={`/functiont/${csid}`}
      >
      返回
      </Button> */}
      </Grid>
      <AddAccept open={openCreateHw} handleClose={onCloseCreateHw}/>

    </div>
  )
}