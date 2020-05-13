import React , { useEffect } from 'react';
import {  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails ,Container, Typography, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import MyMenu from '../MenuS';


const useStyles = makeStyles((theme) => ({
  Paper:{
    width: '85%',
    margin: 'auto', 
    marginTop:'5%',   
    marginBottom:'5%',
    padding:'2%',
    //boxShadow:"1px 1px 1px 1px #9E9E9E",    
},
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  div: {
    height:'100vh',
    background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
  },
  root: {
    background: 'linear-gradient(0deg,#ffffff  0%,#fffaea 30%, #fff2d1 100%)',
    fontFamily: 'Microsoft JhengHei',
    "&$expanded": {
      margin: 10,
      backgroundColor: '#fffaea',
      fontFamily: 'Microsoft JhengHei',
    }
  }
}));

export default function ViewAnnouncements() {

  const classes = useStyles();
  
  const [Announcement, setAnnouncement] = React.useState([]);

  const AnnouncementList = [ 'at_title', 'at_content', 'at_posttime' ]

  const params = useParams();
  const csid = params.cs_id;

  
  // console.log(csid);
  useEffect(() => {
    async function fetchData() {

      const result  = await axios.get(`/student/announcement/${csid}/get/`)
      
      setAnnouncement(result.data);
      console.log(result.data);
      // console.log(result.data[0]['cs_id']);
      
      // const path ={result.data['cs_id']}
    }
    
    fetchData();
  }, []);

  console.log(Announcement);


  return (
   
    
    <div className={classes.div}>  
      <MyMenu/>
      <br/>
      <Paper className={classes.Paper}>
            <Typography  variant="h4" component="h2"  gutterBottom style={{ marginBottom:'2%',textAlign:'center',fontFamily:'微軟正黑體',color:"#000000"}}>公佈欄</Typography>

            <Container maxWidth="sm">
            {Announcement.reverse(),
            Announcement.map((announce,index) => (
                    <ExpansionPanel key={index} classes={classes} >
                      
                    {
                        AnnouncementList.map( (list, i) =>  
                            <ExpansionPanelSummary key={i} style={{marginLeft:10,fontSize:18,
                              fontFamily:'微軟正黑體'}}>
                               <ExpansionPanelDetails>{announce[list]}</ExpansionPanelDetails>
                            </ExpansionPanelSummary>
                            
                        )
                    }
                    
                    </ExpansionPanel>
                    
                ))}
              



            </Container>
            
      
      </Paper>
      
    </div>
    
  );
}