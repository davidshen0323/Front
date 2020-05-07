import React , { useEffect } from 'react';
import {  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails ,Container, Typography, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import MyMenu from '../MenuS';


const useStyles = makeStyles((theme) => ({
  Paper:{
    width: '90%',
    margin: 'auto', 
    marginTop:'5%',   
    marginBottom:'5%',
    padding:'2%',
    boxShadow:"1px 1px 1px 1px #9E9E9E",    
},
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  root: {
    backgroundColor:'#e8eaf6',
    "&$expanded": {
      margin: 10,
      backgroundColor: '#fff',
    },
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
   
    
    <div> 
      <MyMenu/>
      <br/>
      <Paper className={classes.Paper}>
            <Typography  variant="h4" component="h2"  gutterBottom style={{ marginBottom:'2%',textAlign:'center',fontFamily:'微軟正黑體'}}>公佈欄</Typography>

            <Container maxWidth="sm">
            {Announcement.reverse(),
            Announcement.map((announce,index) => (
                    <ExpansionPanel key={index} classes={classes} >
                      
                    {
                        AnnouncementList.map( (list, i) =>  
                            <ExpansionPanelSummary key={i} style={{marginLeft:10,fontSize:18}}>
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