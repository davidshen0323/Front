import React , { useState, useEffect } from 'react';
import MyMenu from '../MenuT';
import { Button, Table, TableHead, TableBody, TableCell, TableRow,Box, ButtonBase, makeStyles, Grid, CardActionArea, Fab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import AddAccept from './addAcceptance';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';



export default function SelectHW_T() {
  //接值

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
    },
    typo: {
      fontFamily: 'Microsoft JhengHei',
      fontWeight:'bold'
    }
  }));
  
  const classes = useStyles();

  const [Acc, setAcc] = React.useState([]);

  const acceptanceList = [ 'hw_name', 'hw_createtime' ]

  const params = useParams();
  const csid = params.cs_id;
  
  // console.log(csid);
  useEffect(() => {
    async function fetchData() {

      const result  = await axios.get(`/teacher/acceptance/${csid}`)
      
      setAcc(result.data);
      console.log(result.data);
      // console.log(result.data[0]['cs_id']);
      
      // const path ={result.data['cs_id']}
    }
    
    fetchData();
  }, []);

  console.log(Acc);

  const [openCreateHw, closeCreateHw] = React.useState(false);
  const onCloseCreateHw = () => {
    closeCreateHw(openCreateHw ? false : true);
  };  
  
  
  return (
    <div>
      <MyMenu/>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeCreateHw(true)}>
          <AddIcon />
        </Fab>
        <br/>
      <Typography className={classes.selehw} variant="h5" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%'}}>請選擇作業：</Typography>
      <Paper className={classes.Paper}>
          
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center" className={classes.typo}>作業名稱</TableCell>
                    <TableCell align="center" className={classes.typo}>日期</TableCell>
                    
                </TableRow>
            </TableHead>
            
            <TableBody>
              {Acc.map((Accept,index) => (
                <TableRow key={index}>
                 
                  {
                    acceptanceList.map( (list, i) => 
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      <ButtonBase className={classes.buttonbase} component={Link} to={`/acceptancet/${csid}/${Accept['hw_name']}`}>
                      {Accept[list]}      
                    </ButtonBase>
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