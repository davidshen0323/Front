import React,{useState} from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Input, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import QrReader from 'react-qr-reader'

const ExpansionPanel = withStyles({
    root: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0
      },
      "&:before": {
        display: "none"
      },
      "&$expanded": {
        margin: "auto"
      }
    },
    expanded: {}
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56
      }
    },
    content: {
      "&$expanded": {
        margin: "12px 0"
      }
    },
    expanded: {}
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiExpansionPanelDetails);

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

export default function JoinClass({ open, handleClose })  {
  
   {/* Block */}
   const [expanded, setExpanded] = React.useState();

   const blockClick = panel => (event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
   };

   //QRcode
  const [scan, setScan] = useState();

  function handleScan (scan) {
    if(scan){
      setScan(scan);
      // setInputs(cs_qrcode);
    }
  }

  function handleError (err) {
    console.error(err);
  }

  const classes = useStyle();
  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    cs_qrcode:'',
  
    //宣告要接值的變數
});
    const handleChange = cs_qrcode => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [cs_qrcode]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
    }   

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    inputs.cs_qrcode='';
  };
  
    const previewStyle = {
      height: 240,
      width: 320,
    }

    let post; //宣告一個布林值變數

const handleSubmit = () =>
{
    if(inputs.cs_qrcode.length > 0) //每個輸入格都不為空值
        {
            fetch('/student/course/joinclass/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  cs_qrcode: inputs.cs_qrcode,
                })
            })
            .then(res => {
                
                async function fetchres(){
                const test = await res.text();  //接收後端傳來的訊息
                if (test === "request failed! this class QRcode not exist!") //課堂不存在
                {
                    //alert("該QRcode不存在！");
                    post = false;
                    console.log(1);
                    setOpenErr1(true);
                    return post;
                }
                else
                {
                    setOpenS(true);
                    setOpenErr1(false);
                   
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
            //alert("請再次確認!!")
            setOpenErr1(true);
            
        }
        
    }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography className={classes.typoHeading} variant="h5">加入課程</Typography>
        <Typography className={classes.typo} variant="body1">請選擇以下方式加入：</Typography>
            <ExpansionPanel square expanded={expanded === "panel1"} onChange={blockClick("panel1")}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" >
                    <Typography >輸入加課代碼</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>請輸入加課代碼：<Input  value={inputs.cs_qrcode} onChange={handleChange('cs_qrcode')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/></Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel square expanded={expanded === "panel2"} onChange={blockClick("panel2")}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>掃描QRcode</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                      {/* <QrReader facingMode="user"  delay={300} onError={handleError} onScan={handleScan} style={{ width:250}}/> */}
                      <QrReader
                        facingMode="environment"
                        delay={300}
                        style={{width:250}}
                        onError={handleError}
                        onScan={handleScan}
                      />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary">關閉視窗</Button>
        {/* <Button disabled={change===0 ? true : false} onClick={handleSubmit} color="primary" >加入課程</Button> */}
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            已加入課程！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} style={{marginBottom:100}}>
          <Alert severity="error">
            該QRcode不存在！
          </Alert>
        </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};