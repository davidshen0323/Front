import React , { useEffect } from 'react';
import { Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails ,Container, Typography, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import {useParams} from "react-router-dom";
import AddAnnouncement from './addAnnouncement';
import AddIcon from '@material-ui/icons/Add';
import MyMenu from '../../teacher/MenuT';
import Paper from '@material-ui/core/Paper';


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
    // width: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper
    width: '100%',
    height:'100vh',
    background: 'linear-gradient(0deg,#bed8d4  0%,  #fffaea 100%)',
  },
  expanded: {},
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

export default function ViewAnnouncementt() {

  const classes = useStyles();
  
  const [Announcement, setAnnouncement] = React.useState([]);

  const AnnouncementList = [ 'at_title', 'at_content', 'at_posttime' ]

  const params = useParams();
  const csid = params.cs_id;

  
  // console.log(csid);
  useEffect(() => {
    async function fetchData() {

      const result  = await axios.get(`/teacher/announcement/${csid}/get/`)
      
      setAnnouncement(result.data);
      console.log(result.data);
      // console.log(result.data[0]['cs_id']);
      
      // const path ={result.data['cs_id']}
    }
    
    fetchData();
  }, []);

  console.log(Announcement);

  
   {/* 教師發佈公告 */}
   const [openAddAnnouncement, closeAddAnnouncement] = React.useState(false);
   const onCloseAddAnnouncement = () => {
     closeAddAnnouncement(openAddAnnouncement ? false : true);
   };


  return (
   
    
    <div className={classes.div}> 
      <MyMenu/>
       {/* 發佈公告 */}
       <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeAddAnnouncement(true)}>
          <AddIcon />
        </Fab>
      <br/>
      <Paper className={classes.Paper}>
      <Typography  variant="h4" component="h2"  gutterBottom style={{ marginBottom:'2%',textAlign:'center',fontFamily:'微軟正黑體'}}>公佈欄</Typography>

            <Container maxWidth="sm">
            { Announcement.reverse(),
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
            <Box  mx="auto" marginTop="3%" marginBottom="5%" width={'30%'} borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC"></Box>
      
      </Paper>
      
    {/* 教師發佈公告 */}
    <AddAnnouncement open={openAddAnnouncement} handleClose={onCloseAddAnnouncement}/>
      
    </div>
    
  );
}