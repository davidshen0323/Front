import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Table, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button } from '@material-ui/core';
import MyMenu from '../../Menu';
import QAReply from './QAReply';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function QAlist_T() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const params = useParams();
  const csid = params.cs_id;

  const [question, setQuestion] = React.useState([]);
  
  const questionlist = ['q_std_id','q_content','q_asktime'];
  const solved_qlist = ['q_std_id','q_content','q_asktime','q_reply'];

  useEffect(() => {
    async function fetchData() {
      const result  = await axios.get(`/teacher/question/all/${csid}`)
      setQuestion(result.data);
      console.log(result.data);
    
    }
    
    fetchData();
  }, []);

  {/* 老師回覆問題 */}
  const [openQAReply, closeQAReply] = React.useState(false);
  const onCloseQAReply = () => {
    closeQAReply(openQAReply ? false : true);
  };
  


  return (
    <div >
        <MyMenu/>
            <AppBar position="static" color="default">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="未回答" href="/drafts" {...a11yProps(0)} />
                <LinkTab label="已回答" href="/trash" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
      <Table>
            <TableHead>
                <TableRow>
                    <TableCell>排序</TableCell>
                    <TableCell>學號</TableCell>
                    <TableCell>問題內容</TableCell>
                    <TableCell>最後更新時間</TableCell>
                    <TableCell>回覆</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {question.map((Ques,index) => Ques[ "q_solved"] === "0" ?
            (
                <TableRow key={index}>
                 <TableCell>{index+1}</TableCell>
                  {
                    questionlist.map( (list, i) => 
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {Ques[list]}
                      <Button onClick={() => closeQAReply(true)} variant="contained" color="primary" >
                        回覆
                      </Button>
                     </TableCell>
                      )
                    }
                    
                </TableRow>
              )
              :
              <div></div>
              )}

                {/* <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>406401628</TableCell>
                    <TableCell>Table 怎麼做</TableCell>
                    <TableCell>2020-04-03 11:29</TableCell>
                    <TableCell><Button onClick={() => closeQAReply(true)} variant="contained" color="primary" >回覆</Button></TableCell>
                </TableRow> */}
                
               
            </TableBody>
          </Table>
      </Box>
      </TabPanel>

      {/* 老師回覆問題的小框框 */}
      <QAReply open={openQAReply} handleClose={onCloseQAReply}/>

      <TabPanel value={value} index={1}>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
      <Table>
            <TableHead>
                <TableRow>
                    <TableCell>排序</TableCell>
                    <TableCell>學號</TableCell>
                    <TableCell>問題內容</TableCell>
                    <TableCell>最後更新時間</TableCell>
                    <TableCell>回覆內容</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {question.map((Ques,k) =>  Ques[ "q_solved"] === "1" ? (
                <TableRow key={k}>
                 <TableCell>{k+1}</TableCell>
                  {
                    solved_qlist.map( (list, i) => 
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {Ques[list]}
                      </TableCell>
                      )
                    }
                    
                </TableRow>
              ):
              <div></div>
              )}
                
                {/* <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>406401629</TableCell>
                    <TableCell>我不會寫作業</TableCell>
                    <TableCell>2020-04-03 11:30</TableCell>
                    <TableCell>誰叫你不認真上課</TableCell>
                </TableRow> */}
                
            </TableBody>
          </Table>
      </Box>
      </TabPanel>
    </div>
  );
}