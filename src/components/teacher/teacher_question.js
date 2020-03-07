import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MyMenu from './teacher_menu';

export default function TQuestionList() {

  /*------------ STATE ------------*/
  const [questions, setQuestions] = useState([]);

  /*------------ STYLE ------------*/
  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 450,
    },
  });
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const questionList = [ 'q_std_id', 'q_content', 'q_time']
  const csname='專題系統開發（一）'

  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/question/all/10811000DMG741D7411023900`);
          setQuestions(result.data);
        //   console.log(result.data);
      }
      fetchData();
  }, []);

  return (
    <Paper className={classes.root}>
      <MyMenu/>

  <center> <label>{csname}</label>  </center>

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell >排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell >問題內容</TableCell>
                  <TableCell >最後更新時間</TableCell>
                  <TableCell >完成問題</TableCell>
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {questions.map((question,index) => (
                    <TableRow key={index}>
                      <TableCell>{index+1} </TableCell>
                    {
                        questionList.map( (list, i) =>   i === 0 ? 
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {question[list]}
                            </TableCell>:
                            <TableCell key={i} align="left">{question[list]}</TableCell> 
                            
                        )
                    }
                    
                    </TableRow>
                    
                ))}
            </TableBody>

        </Table>
    </Paper>
)
}