import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, CardActionArea, AppBar, Tabs, Tab, Table, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button, Container } from '@material-ui/core';
import MyMenu from '../MenuS';
import AddQA from './AddQA';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import TableContainer from '@material-ui/core/TableContainer';
import { List, Dialog } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
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
const useStyles = makeStyles(theme => ({

  Paper: {
    width: '100%',
    margin: 'auto',
  },
  root: {
    width: '100%',
    textAlign: 'center',
  },
  table: {
    minWidth: 750,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100px',
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    fontSize: 16,
    backgroundColor: "#f8b62b",
    fontWeight: 'bold',
  },
  div: {
    height: '250vh',
    // background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
    backgroundColor: '#ffe1c4',
  },
  card: {
    //marginLeft: theme.spacing(10),
    // marginTop: theme.spacing(3),
    maxWidth: '80%',
    margin: 'auto',
    // width: 'auto',
    // padding: theme.spacing(3),
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "white",
    border:1,
    backgroundColor:'white',
  },
tablecell: {
  width: '800pt',
  margin: 'auto',
  // marginTop: '500pt',
  // paddingTop: "30pt",
  // paddingBottom: "30pt",
  // paddingInline: "30pt",
  borderRadius: "25px",
  borderColor: "white",
  fontFamily: 'Microsoft JhengHei',
  fontWeight: 'bold',
  },
  stdid: {
    width: '800pt',
    margin: 'auto',
    // marginTop: '500pt',
    // paddingTop: "30pt",
    // paddingBottom: "30pt",
    // paddingInline: "30pt",
    borderRadius: "25px",
    borderColor: "white",
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    fontSize: 20,
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


  const questionlist = ['q_asktime', 'q_content'];
  const solved_qlist = ['q_std_id', 'q_content', 'q_replytime', 'q_reply'];

  const [stdid, setStdid] = React.useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/student/question/all/${csid}/`)
      setQuestion(result.data);
      console.log(result.data);

    }
    async function fetchStdid() {
      const result = await axios.get(`/student/std_id`);
      // setStdid(result.data);
      setStdid(result.data['std_id']);
      console.log(result.data);
      console.log(stdid);
    }

    fetchData();
    fetchStdid();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  {/* 學生新增問題 */ }
  const [openAddQa, closeAddQa] = React.useState(false);
  const onCloseAddQa = () => {
    closeAddQa(openAddQa ? false : true);
  };

  //   const handleDelete = () => {
  //     fetch(`/student/deletequestioncontent/`,{
  //       method: 'DELETE',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         std_id: stdid,
  //         q_asktime:  ,
  //   })
  //  })
  //  window.location.reload();

  //   }

  const deletequestion = (event, id) => {
    const QuesIndex = question.findIndex(s => s.q_asktime == id)
    var newlist = [...question]

    setQuestion(newlist)
    handleDelete(question[QuesIndex])
    console.log('newlist', question[QuesIndex])
  }

  const handleDelete = (qstudent) => {

    console.log('qstudent', qstudent['q_asktime'])
    console.log('stdid', stdid)
    console.log('qstdid', qstudent["q_std_id"])

    fetch(`/student/deletequestioncontent/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q_std_id: qstudent.q_std_id,
        q_asktime: qstudent.q_asktime,
      })
    })
    window.location.reload();
  }



  return (
    <div className={classes.div}>

      <MyMenu />
      <AppBar position="static" color="default">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="未解決" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="已解決" href="/trash" {...a11yProps(1)} />

        </Tabs>
      </AppBar>


      <TabPanel value={value} index={0}>

        <div className={classes.root}>


          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >

            {question.map((Ques, index) => Ques["q_solved"] === "0" ?
              (
                <TableCell style={{border:0}}>

                {/* <Card> */}

                <CardActionArea
                  className={classes.card} 
                  >
                  {
                    questionlist.map((list, i) => i < 1 ?
                    (
                      <div>
                        <Container maxWidth="sm">

                    <TableCell
                    key={i}
                    component="th"
                    scope="row"
                    align="center"
                    variant="body"
                    className={classes.stdid}>
                      {/* <Typography> *6
                      */}
                        {Ques['q_content']}
                    {/* </Typography> */}
                    </TableCell>

                    </Container>
                    </div>
                   )
                   :
                   (
                     <div>

                    <TableCell
                    key={i}
                    component="th"
                    scope="row"
                    align="center"
                    variant="body"
                    className={classes.tablecell}>
                      {/* <Typography> */}
                        {Ques['q_asktime']}
                    {/* </Typography> */}
                    </TableCell>

                    </div>
                    )
                    )
                  }
                </CardActionArea>
            {/* </Card> */}
                    </TableCell>

)
:
<div></div>)
            }


          </Grid>

{/* 
<Paper>
            <TableContainer>
              <Table
                className={classes.table}
                size='small'>
                <TableHead>
                  <TableRow>
                   
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center">最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="left">取消問題</TableCell>
                    
                  </TableRow>
                </TableHead>

                <TableBody>
                  {question.map((Ques, index) => Ques["q_solved"] === "0" ?
                    (
                      <TableRow key={index}>

                        {
                          questionlist.map((list, i) => i < 3 ?

                            <TableCell key={i} component="th" scope="row" align="center">
                              {Ques[list]}
                            </TableCell>
                            :
                            <TableCell>
                              {
                                Ques['q_std_id'] === stdid ?
                                  <IconButton>
                                    <CloseIcon onClick={(e) => deletequestion(e, Ques.q_asktime)} />
                                  </IconButton>
                                  :
                                  <div style={{ padding: 20 }}></div>
                              }

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
            </TableContainer>
          </Paper> */}


          <Button
            onClick={handleClickOpen}
            variant="contained"
            className={classes.button}
          >
            我要發問
        </Button>



          <Dialog open={open} onClose={handleClose}>

            <AddQA />
          </Dialog>


        </div>
      </TabPanel>

      {/* 老師回覆問題的小框框 */}
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}

      <TabPanel value={value} index={1}>
        <div className={classes.root}>
          
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >

            {question.map((Ques, index) => Ques["q_solved"] === "1" ?
              (
                <TableCell style={{border:0}}>

                {/* <Card> */}

                <CardActionArea
                  className={classes.card} 
                  >
                  {
                    questionlist.map((list, i) => i < 1 ?
                    (
                      <div>
                        <Container maxWidth="sm">

                    <TableCell
                    key={i}
                    component="th"
                    scope="row"
                    align="center"
                    variant="body"
                    className={classes.stdid}>
                      {/* <Typography> *6
                      */}
                        {Ques['q_content']}
                    {/* </Typography> */}
                    </TableCell>

                    </Container>
                    </div>
                   )
                   :
                   (
                     <div>

                    <TableCell
                    key={i}
                    component="th"
                    scope="row"
                    align="center"
                    variant="body"
                    className={classes.tablecell}>
                      {/* <Typography> */}
                        {Ques['q_asktime']}
                    {/* </Typography> */}
                    </TableCell>

                    </div>
                    )
                    )
                  }
                </CardActionArea>
            {/* </Card> */}
                    </TableCell>

)
:
<div></div>)
            }


          </Grid>
          {/* <Paper>
            <TableContainer>
              <Table
                className={classes.table}
                size='small'>
                <TableHead>
                  <TableRow>
                   
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">問題內容</TableCell>
                    <TableCell component="th" scope="row" align="center">最後更新時間</TableCell>
                    <TableCell component="th" scope="row" align="center">回覆內容</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {

                    question.map((Ques, k) => Ques["q_solved"] === "1" ? (
                      <TableRow key={k}>

                        {
                          solved_qlist.map((list, i) =>

                            <TableCell key={i} component="th" scope="row" align="center">
                              {Ques[list]}
                            </TableCell>
                          )
                        }

                      </TableRow>
                    ) :
                      <div></div>
                    ).reverse()}

                </TableBody>
              </Table>
            </TableContainer>
          </Paper> */}
        </div>
      </TabPanel>
    </div>
  );
}