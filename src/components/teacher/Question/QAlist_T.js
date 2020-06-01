import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Table, TableHead, TableBody, TableRow, TableCell, Typography, Box} from '@material-ui/core';
import MyMenu from '../MenuT';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QaReply from './QAReply';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


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

/*------------ STYLE ------------*/
const useStyles = makeStyles(theme =>({

  Paper:{
      width: '100%',
      margin: 'auto',        
  },
  root: {
    width: '100%',
    textAlign:'center',
  },
  table: {
    minWidth: 750,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'100px',
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    fontSize:16,
    backgroundColor: "#f8b62b",
    fontWeight:'bold',
}, 
div:{
  height:'100vh',
  background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
},
}
));

/*--------------------------------*/


export default function QAlist_T() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const params = useParams();
  const csid = params.cs_id;

  const [question, setQuestion] = React.useState([]);
  
  const questionlist = ['q_std_id','q_content','q_asktime', 'q_sovled'];
  const solved_qlist = ['q_std_id','q_content','q_replytime','q_reply'];


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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }
  


  return (
    <div className={classes.div}>
        <MyMenu/>
            <AppBar position="static" color="default" style={{maxWidth:'96%',margin:'auto'}}>
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="未解決" href="/drafts" {...a11yProps(0)} style={{ fontFamily:'微軟正黑體'}}/>
                <LinkTab label="已解決" href="/trash" {...a11yProps(1)} style={{ fontFamily:'微軟正黑體'}}/>
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
      
      <Paper>
          <TableContainer>
      <Table
      className={classes.table}
      size='small'>
            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>學號</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>回覆</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {question.map((Ques,index) => Ques["q_solved"] === "0" ?
            (
                <TableRow key={index}>
                 {/* <TableCell>{index+1}</TableCell> */}
                  {
                    questionlist.map( (list, i) => i < 3 ?
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {Ques[list]}
                     </TableCell>
                     :
                     <TableCell key={i} align="center">
                      <QaReply
                      id={Ques['q_id']}
                      stdid={Ques['q_std_id']}
                      time={Ques['q_asktime']}
                      content={Ques['q_content']}
                      />
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
      </TableContainer>
      </Paper>
      </TabPanel>

      {/* 老師回覆問題的小框框 */}
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}

      <TabPanel value={value} index={1}>
        <Paper>
          <TableContainer>
      <Table
      className={classes.table}
      size='small'>
            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>學號</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>回覆內容</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {
            
            question.map((Ques,k) =>  Ques[ "q_solved"] === "1" ? (
                <TableRow key={k}>
                 
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
              ).reverse()}
               
            </TableBody>
          </Table>
          </TableContainer>
          </Paper>
          </TabPanel>
    </div>
  );
}