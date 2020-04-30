import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, TextareaAutosize, Input} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {useHistory, useParams} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


const useStyle = makeStyles(theme => ({
  typo: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  description: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  typoHeading: {
    color: "blue",
    padding: 10
  },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddAnnouncement({ open, handleClose })  {
  const classes = useStyle();
  const params = useParams();
  const csid = params.cs_id;
  const [openS, setOpenS] = React.useState(false);
  const [changes, setChanges] = React.useState(1);
  const [inputs, setInputs] = React.useState({
    title:'',
    content:'',
    //宣告要接值的變數
});

  

const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
    //
}

let post; //宣告一個布林值變數
let history = useHistory(); //傳值跳頁的方法


  const submitClick = () => {
  
    setOpenS(true);
  };

  const submitClose = (event, reason) => {
    handleClose(true);
    setOpenS(false);
    setChanges(1);
    inputs.title='';
    inputs.content='';
    window.location.reload();
    
  };
    
  const handleSubmit = () =>
    {
        if(inputs.title.length > 0 
            && inputs.content.length > 0) //每個輸入格都不為空值
            {
                fetch('/teacher/announcement/post/',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      at_title: inputs.title,
                      at_content: inputs.content,
                      cs_id: csid
                    })
                })
                .then(res => {
                    
                    async function fetchres(){
                    const test = await res.text();  //接收後端傳來的訊息
                    if (test === "request failed. Class does not exist!") //課堂不存在
                    {
                        alert("課堂不存在!");
                        post = false;
                        console.log(1);
                        return post;
                    }
                    else if(test === "request failed. teacher not in this class!") //教師不屬於該課堂
                    {
                        alert("教師不屬於該課堂!");
                        post = false;
                        console.log(2);
                        return post;
                    }
                    else
                    {
                        setOpenS(true);
                        post = true;
                        console.log(0);
                     //   history.push('/ViewAnnouncementt/${csid}');
                        return post;                        
                    }
                    
                } fetchres() })
                // .then(res => console.log(post))
                .then(res => console.log(res))
                .catch(err => console.log(`Error with message: ${err}`))
            }
            
            else
            {
                alert("請再次確認!!")
            }
            
        }

        
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            發佈公告
          </Typography>

          <Typography className={classes.typo} variant="body1">
            請輸入公告名稱：<Input id="title" value={inputs.title} onChange={handleChange('title')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>

          </Typography>

        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入公告內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize
            id="content" 
            value={inputs.content} 
            onChange={handleChange('content')} 
            style={{borderRadius:10, padding:8, width:350, height:250, fontSize:14, fontFamily:'微軟正黑體'}}
            rowsMin={5}
            placeholder="請輸入公告內容"
            />
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary">關閉視窗</Button>
        <Button disabled={inputs.title === ''&&inputs.content=== ''} onClick={handleSubmit} color="primary" >確認送出</Button>
        {/* 成功的綠色小框 */}
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已發佈公告！
        </Alert>
      </Snackbar>

      </DialogActions>
    </Dialog>
    
  );
};