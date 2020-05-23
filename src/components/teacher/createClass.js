import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Input, Snackbar} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(theme => ({
  typo: {
    marginLeft: 10,
    padding: 5,
    flex: 1,
    fontFamily: 'Microsoft JhengHei',
  },
  description: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  typoHeading: {
    color: "#582707",
    padding: 10,
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
  },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function CreateClass({ open, handleClose })  {
  const classes = useStyle();

   // 成功小綠綠
   const [openS, setOpenS] = React.useState(false);
   // 失敗小紅1
   const [openErr1, setOpenErr1] = React.useState(false);
   // 失敗小紅2
   const [openErr2, setOpenErr2] = React.useState(false);
 
  const [inputs, setInputs] = React.useState({
    csid:'',
    name:'',
    //宣告要接值的變數
});
    const handleChange = csid => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [csid]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
    }   

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    inputs.csid='';
    inputs.name='';
    window.location.reload();
  };

  let post; //宣告一個布林值變數

  
const handleSubmit = () =>
{
    if(inputs.name.length > 0 
        && inputs.csid.length > 0) //每個輸入格都不為空值
        {
            fetch('/teacher/course/addclass/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  cs_id: inputs.csid,
                  cs_name: inputs.name,
                })
            })
            .then(res => {
                
                async function fetchres(){
                const test = await res.text();  //接收後端傳來的訊息
                if (test === "request failed! ClassID and ClassName can not be null!") //課堂不存在
                {
                    //alert("請輸入課程代碼及名稱！");
                    post = false;
                    console.log(1);
                    setOpenErr1(true);
                    setOpenErr2(false);
                    return post;
                }
                else if(test === "request failed! ClassID has already exist in database, please change a new ClassID") //教師不屬於該課堂
                {
                    //alert("該課程代碼已存在，請新增其他課程代碼！");
                    post = false;
                    console.log(2);
                    setOpenErr2(true);
                    setOpenErr1(false);
                    return post;
                }
                else
                {
                    setOpenS(true);
                    setOpenErr1(false);
                    setOpenErr2(false);
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
          <Typography className={classes.typoHeading} variant="h5">
            建立課程
          </Typography>
          {/* <Typography className={classes.typo} variant="body1">
            請輸入課程代碼：<Input value={inputs.csid} onChange={handleChange('csid')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography> */}
          <TextField
          label="課程代碼"
          variant="outlined"
          size="small" value={inputs.csid} onChange={handleChange('csid')} style={{fontFamily:'微軟正黑體',marginBottom:10}}/>
          

        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
        {/* <Typography className={classes.typo} variant="body1">
            請輸入課程名稱：<Input  value={inputs.name} onChange={handleChange('name')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography> */}
           <TextField
          label="課程名稱"
          variant="outlined"
          size="small"  value={inputs.name} onChange={handleChange('name')} style={{fontFamily:'微軟正黑體'}} />

        </div>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" style={{fontFamily:'微軟正黑體'}}autoFocus>關閉視窗</Button>
        <Button disabled={inputs.cs_id===''|| inputs.cs_name==='' ? true : false} onClick={handleSubmit} color="primary" style={{fontFamily:'微軟正黑體'}} autoFocus>儲存</Button>
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            已建立課程！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} style={{marginBottom:100}}>
          <Alert severity="error">
            請輸入課程代碼及名稱！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框2 */}
        <Snackbar open={openErr2} style={{marginBottom:100}}>
          <Alert severity="error">
            該課程代碼已存在，請新增其他課程代碼！
          </Alert>
        </Snackbar>
       
      </DialogActions>
    </Dialog>
    
  );
};