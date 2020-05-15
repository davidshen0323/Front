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

export default function EditAnnouncement( props )  {
  const classes = useStyle();
  const params = useParams();
  const csid = params.cs_id;

  const [open, setOpen] = React.useState(false);

  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
  // 失敗小紅2
  const [openErr2, setOpenErr2] = React.useState(false);
  // 失敗小橘3
  const [openErr3, setOpenErr3] = React.useState(false);
  // 失敗小橘4
  const [openErr4, setOpenErr4] = React.useState(false);

  const [changes, setChanges] = React.useState(1);
  const [inputs, setInputs] = React.useState({
    id: props.atid,
    //宣告要接值的變數
});


// const handleChange = fieldname => event => {
//     event.persist();
//     setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
//     //
// }

// let post; //宣告一個布林值變數
// let history = useHistory(); //傳值跳頁的方法


//   const submitClick = () => {
  
//     setOpenS(true);
//   };

  const submitClose = (event, reason) => {
    handleClose(true);
    setOpenS(false);
    setChanges(1);
    inputs.id='';
    // inputs.content='';
    window.location.reload();
    
  };
    
  const handleDelete = () =>
    {
        if( inputs.id !== null ) //每個輸入格都不為空值
            {
                fetch('/teacher/announcement/delete/',{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      at_id: props.atid,
                      cs_id: csid,
                    })
                })
                .then(res => {
                    console.log(inputs.id)
                    async function fetchres(){
                    const test = await res.text();  //接收後端傳來的訊息
                    if (test === "request failed. at_id not found!") //公告不存在
                    {
                        //alert("課堂不存在!");
                        // post = false;
                        console.log(1);
                        setOpenErr1(true);
                        setOpenErr2(false);
                        setOpenErr3(false);
                        setOpenErr4(false);
                        // return post;
                    }
                    else if(test === "request failed. ClassID does not exist!") //教師不屬於該課堂
                    {
                        //alert("教師不屬於該課堂!");
                        // post = false;
                        console.log(2);
                        setOpenErr2(true);
                        setOpenErr1(false);
                        setOpenErr3(false);
                        setOpenErr4(false);

                        // return post;
                    }
                    else if(test === "request failed. teacher not in this class!") //教師不屬於該課堂
                    {
                        //alert("教師不屬於該課堂!");
                        // post = false;
                        console.log(3);
                        setOpenErr3(true);
                        setOpenErr1(false);
                        setOpenErr2(false);
                        setOpenErr4(false);

                        // return post;
                    }
                    else
                    {
                        setOpenS(true);
                        setOpenErr1(false);
                        setOpenErr2(false);
                        setOpenErr3(false);
                        setOpenErr4(false);

                        // post = true;
                        console.log(0);
                     //   history.push('/ViewAnnouncementt/${csid}');
                        // return post;                        
                    }
                    
                } fetchres() })
                // .then(res => console.log(post))
                .then(res => console.log(res))
                .catch(err => console.log(`Error with message: ${err}`))
            }
            
            else
            {
                //alert("請再次確認!!")
                setOpenErr4(true);
                
            }
            
        }

        const handleOpenButton = () => {
          setOpen(true);
        }
        
        const handleClose= () => {
          setOpen(false);
        }

  return (
    <div>
    <Button
      onClick={handleOpenButton}
      >
      刪除
      </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            確定要刪除此公告?
          </Typography>

          {/* <Typography className={classes.typo} variant="body1">
            請輸入公告id：<Input id="title" value={inputs.id} onChange={handleChange('id')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>

          </Typography> */}

        </div>

        {/* <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入公告內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize
            id="content" 
            value={inputs.content} 
            onChange={handleChange('content')} 
            style={{borderRadius:10, padding:8, width:350, height:150, fontSize:14, fontFamily:'微軟正黑體'}}
            rowsMin={5}
            placeholder="請輸入公告內容"
            />
          </Typography>
        </div> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">關閉視窗</Button>
        <Button  onClick={handleDelete} color="primary">確認刪除</Button>
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            已刪除公告！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} style={{marginBottom:100}}>
          <Alert severity="error">
            公告不存在！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框2 */}
        <Snackbar open={openErr2} style={{marginBottom:100}}>
          <Alert severity="error">
            課堂不存在！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框3 */}
        <Snackbar open={openErr3} style={{marginBottom:100}}>
          <Alert severity="warning">
            教師不存在！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框4 */}
        <Snackbar open={openErr4} style={{marginBottom:100}}>
          <Alert severity="warning">
            請再次確認！
          </Alert>
        </Snackbar>
      </DialogActions>
    </Dialog>
    </div>
  );
};