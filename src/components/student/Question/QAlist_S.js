import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Table, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button } from '@material-ui/core';
import MyMenu from '../MenuS';
import AddQA from './AddQA';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TableContainer from '@material-ui/core/TableContainer';
import {List,Dialog} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

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
     backgroundColor: "#003060",
    fontWeight:'bold',
},
}
));

/*--------------------------------*/

export default function QAlist_S() {
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
      const result  = await axios.get(`/student/question/all/${csid}`)
      setQuestion(result.data);
      console.log(result.data);
    
    }
    
    fetchData();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }

  {/* 學生新增問題 */}
  const [openAddQa, closeAddQa] = React.useState(false);
  const onCloseAddQa = () => {
    closeAddQa(openAddQa ? false : true);
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
        
        <div className={classes.root}>
          <TableContainer>
      <Table
      className={classes.table}
      size='small'>
            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center">最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="left">取消問題</TableCell>
                    {/* <TableCell component="th" scope="row" align="center">回覆</TableCell> */}
                </TableRow>
            </TableHead>
            
            <TableBody>
            {question.map((Ques,index) => Ques["q_solved"] === "0" ?
            (
                <TableRow key={index}>
                 {/* <TableCell>{index+1}</TableCell> */}
                  {
                    questionlist.map( (list, i) => i<3 ?
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {Ques[list]}
                     </TableCell>
                     :
                     <TableCell>
                      <IconButton>
                        <CloseIcon/>
                      </IconButton>
                     </TableCell>
                    )
                    }
                    
                </TableRow>
              )
              :
              <div></div>
              )}
               
               
            </TableBody>
          </Table>
          <List >
          {/* <Button 
          className={classes.button}
          variant="contained" 
          color="primary">
            取消問題
          </Button> */}

          <Button 
            onClick = {handleClickOpen}
            variant = "contained" 
            color = "primary" 
            className={classes.button}
          >
          我要發問
        </Button>

        <Dialog open={open} onClose={handleClose}>

          <AddQA />
        </Dialog>
          </List>

          </TableContainer>
          </div>
      </TabPanel>

      {/* 老師回覆問題的小框框 */}
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}

      <TabPanel value={value} index={1}>
        <div className={classes.root}>
          <TableContainer>
      <Table
      className={classes.table}
      size='small'>
            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center">最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="center">回覆內容</TableCell>
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
          </div>
      </TabPanel>
    </div>
  );
}