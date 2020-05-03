import React,{useState} from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Input} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
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
      setChange(1);
    }
  }

  function handleError (err) {
    console.error(err);
  }

  // const qr = useRef();
  // function openImageDialog() {
  //   qr.current.focus();
  // }
  
  // function openImageDialog() {
  //   rootRef.qrReader1.openImageDialog();
  // }

  const classes = useStyle();
  const [openS, setOpenS] = React.useState(false);  
  const [change, setChange] = React.useState(0);  
  const [inputs, setInputs] = React.useState({
    cs_id:'',
  
    //宣告要接值的變數
});
    const handleChange = cs_id => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [cs_id]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
        setChange(1);
    }   

  const submitClick = () => {
    setOpenS(true);
  };

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    setChange(0);
    inputs.cs_id='';
  };

  // 這邊要傳值給後端比對
  const rollcall = () => {
    
  };
  
  
    const previewStyle = {
      height: 240,
      width: 320,
    }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography className={classes.typoHeading} variant="h5">加入課程</Typography>
        <Typography className={classes.typo} variant="body1">請選擇以下方式加入：</Typography>
            <ExpansionPanel square expanded={expanded === "panel1"} onChange={blockClick("panel1")}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" >
                    <Typography >輸入課程代碼</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>請輸入課程代碼：<Input  value={inputs.cs_id} onChange={handleChange('cs_id')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/></Typography>
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
        <Button disabled={change===0 ? true : false} onClick={submitClick} color="primary" >加入課程</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已加入課程！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};