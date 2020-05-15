import React , { useEffect } from 'react';
import { Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Container, Typography, Box, ExpansionPanelActions, Divider, Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import {useParams} from "react-router-dom";
import AddAnnouncement from './addAnnouncement';
import EditAnnouncement from './editAnnouncement';
import DeleteAnnouncement from './DeleteAnnouncement';
import AddIcon from '@material-ui/icons/Add';
import MyMenu from '../../teacher/MenuT';

import AppsIcon from '@material-ui/icons/Apps';
import { WingBlank } from 'antd-mobile';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

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
    backgroundColor: '#582707',
  },
  // fab2: {
  //   position: 'fixed',
  //   bottom: theme.spacing(15),
  //   right: theme.spacing(5),
  //   backgroundColor: '#582707',

  // },
  // fab3: {
  //   position: 'fixed',
  //   bottom: theme.spacing(25),
  //   right: theme.spacing(5),
  //   backgroundColor: '#582707',

  // },

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

export default function ViewAnnouncementt() {

  const classes = useStyles();
  
  const [Announcement, setAnnouncement] = React.useState([]);

  const AnnouncementList = [ 'at_title', 'at_content', 'at_posttime', '', 'at_id' ]

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

  //  教師修改公告
   const [openEditAnnouncement, closeEditAnnouncement] = React.useState(false);
   const onCloseEditAnnouncement = () => {
     closeEditAnnouncement(openEditAnnouncement ? false : true);
   };

   //  教師刪除公告
   const [openDeleteAnnouncement, closeDeleteAnnouncement] = React.useState(false);
   const onCloseDeleteAnnouncement = () => {
     closeDeleteAnnouncement(openDeleteAnnouncement ? false : true);
   };

  return (
   
    
    <div className={classes.div}> 
      <MyMenu/>
       {/* 發佈公告 */}
       <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeAddAnnouncement(true)}>
          <AddIcon />
        </Fab>

        {/* <WingBlank/>
        <Fab color="primary" aria-label="add" className={classes.fab2} onClick={() => closeEditAnnouncement(true)}>
          <AppsIcon />
        </Fab>

        <Fab color="primary" aria-label="add" className={classes.fab3} onClick={() => closeDeleteAnnouncement(true)}>
          <DeleteOutlineIcon />
        </Fab> */}
      <Box border={1} mx="auto" marginTop="8%" marginBottom="5%" width={'80%'} borderRadius={16} boxShadow={3} bgcolor="#fff" borderColor="#0066CC">
            <Typography  variant="h4" component="h2"  gutterBottom style={{ marginBottom:'2%',textAlign:'center',marginTop:'2%',color:'#0066CC'}}>公佈欄</Typography>


            <Container maxWidth="sm">
            { 
            Announcement.reverse(),
            Announcement.map((announce,index) => (
              <ExpansionPanel key={index} classes={classes} >
                      
                    {
                      AnnouncementList.map( (list, i) =>  i < 4 ? 
                        <ExpansionPanelSummary key={i} style={{marginLeft:10,fontSize:18}}>
                               <ExpansionPanelDetails>
                                  {announce[list]}
                               </ExpansionPanelDetails>
                        </ExpansionPanelSummary>
                               
                               :
                               <div>

                                <Divider />

                                <ExpansionPanelActions>
                                  <EditAnnouncement
                                  atid={announce['at_id']}
                                  attitle={announce['at_title']}
                                  atcontent={announce['at_content']}
                                  />
                                  <DeleteAnnouncement
                                  atid={announce['at_id']}
                                  />

                                </ExpansionPanelActions>
                                        
                            
                      </div>
                      )
                    
                      }          
                    </ExpansionPanel>
            
            ))}
            
            </Container>
            <Box mx="auto" marginTop="3%" marginBottom="5%" width={'30%'} borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC"></Box>
            
            {/* </Paper> */}
            </Box>
    {/* 教師發佈公告 */}
    <AddAnnouncement open={openAddAnnouncement} handleClose={onCloseAddAnnouncement}/>
    
    {/* <EditAnnouncement open={openEditAnnouncement} handleClose={onCloseEditAnnouncement}/>
    
    <DeleteAnnouncement open={openDeleteAnnouncement} handleClose={onCloseDeleteAnnouncement}/> */}
    </div>
    
  );
}
