import React , { useEffect } from 'react';
import { Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails ,Container, Typography, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import {useParams} from "react-router-dom";
import AddAnnouncement from './addAnnouncement';
// import EditAnnouncement from './editAnnouncement';
import AddIcon from '@material-ui/icons/Add';
import MyMenu from '../../teacher/MenuT';
import AppsIcon from '@material-ui/icons/Apps';
import { WingBlank } from 'antd-mobile';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  expanded: {},
  root: {
    backgroundColor:'#e8eaf6',
    "&$expanded": {
      margin: 10,
      backgroundColor: '#fff',
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

   //教師修改、刪除公告
   const [openEditAnnouncement, closeEditAnnouncement] = React.useState(false);
   const onCloseEditAnnouncement = () => {
     closeEditAnnouncement(openEditAnnouncement ? false : true);
   };

  return (
   
    
    <div> 
      <MyMenu/>
       {/* 發佈公告 */}
       <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeAddAnnouncement(true)}>
          <AddIcon />
        </Fab>
        <WingBlank/>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeEditAnnouncement(true)}>
          <AppsIcon />
        </Fab>

      <Box border={1} mx="auto" marginTop="8%" marginBottom="5%" width={'80%'} borderRadius={16} boxShadow={3} bgcolor="#fff" borderColor="#0066CC">
            <Typography  variant="h4" component="h2"  gutterBottom style={{ marginBottom:'2%',textAlign:'center',marginTop:'2%',color:'#0066CC'}}>公佈欄</Typography>

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
            <Box mx="auto" marginTop="3%" marginBottom="5%" width={'30%'} borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC"></Box>
      
      </Box>
      
    {/* 教師發佈公告 */}
    <AddAnnouncement open={openAddAnnouncement} handleClose={onCloseAddAnnouncement}/>
    
    {/* <EditAnnouncement open={openEditAnnouncement} handleClose={onCloseEditAnnouncement}/> */}
    
    </div>
    
  );
}