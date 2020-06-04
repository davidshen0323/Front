import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Input,TextField} from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import GradeIcon from '@material-ui/icons/Grade';
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState, useEffect } from "react";
import {Grid,Chip } from "@material-ui/core";
import { throttle, debounce } from "throttle-debounce";


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyle = makeStyles(theme => ({
  typo: {
    color: "#582707",
    padding: 10,
    fontSize:16,
    flex: 1,
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold',
  },
  typoHeading: {
    color: "#582707",
    padding: 10,
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'100px',
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    fontSize:14,
    backgroundColor: "#f8b62b",
    fontWeight:'bold',
},
  textfield: {
    paddingLeft: 10,
    width:200,
  },
  label:{
    marginLeft:10,
  }
}));

const BootstrapInput = withStyles(theme => ({
 
  input: {
    borderRadius: 4,
    position: 'relative',
    //backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
   // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptScore( props )  {
  const classes = useStyle();
  


  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    score:'',
    content:'',
  });
  const [open, setOpen] = React.useState(false);

  const[state,setState] = React.useState({});
  const [label, setLabel] = React.useState("");

  
  const [expanded, setExpanded] = React.useState(false);

  // const handleChange = fieldname => event => {
  //   setInputs(2);
  //   event.persist();
  //   setScore(score => ({...score, [fieldname]: event.target.value}));
  //   //
  // }

  const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
    //
  }
  
  const labelChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChangelabel = (event) => {
    setLabel(event.target.value);
  };

  const submitClick = () => {
    setOpenS(true);
    console.log(props.stdid);
    console.log(props.hwid);
    console.log(parseInt(inputs.score));
    
    fetch('/teacher/updateScore',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          std_id: props.stdid,
          accept_hw_id: props.hwid,
          accept_score: parseInt(inputs.score),
          // accept_done: 1
      })
  })

  };

  const submitClose = (event, reason) => {

    handleClose(true);
    setOpenS(false);
    setInputs(1);
    window.location.reload();
  };

  const nosubmitClose = (event, reason) => {

    handleClose(true);
    setOpenS(false);
    setInputs(1);
    // window.location.reload();
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChangepanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const autocompleteSearch = query => {
    console.log("autocompleteSearch", query);
    _fetch(query);
  };

  const autocompleteSearchDebounced = debounce(500, autocompleteSearch);
  const autocompleteSearchThrottled = throttle(500, autocompleteSearch);


  useEffect(() => {
    if (query.length < 5) {
      autocompleteSearchThrottled(query);
    } else {
      autocompleteSearchDebounced(query);
    }
  }, [query]);

  const _fetch = query => {
    const _searches = searches || [];
    _searches.push(query);
    setSearches(_searches);
  };




  return (
    <div>
      <Button 
      onClick = {handleClickOpen}
      variant = "contained" 
      className={classes.button}
    >
    驗收
  </Button>
    <Dialog open={open} onClose={handleClose} >
      <DialogContent>
        
          <Typography className={classes.typoHeading} variant="h5">
            驗收
          </Typography>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChangepanel('panel1')}>
            
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          
          
          <Typography className={classes.typo} >
            學號：{props.stdid}
          </Typography>

          <Typography className={classes.typo} >
            姓名：{props.stdid}
          </Typography>

        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <div 
          style={{display: "flex",
        flexDirection: "column", 
         justifyContent: "center"}}>
        <div 
        style={{display: "flex",
       // flexDirection: "row", 
         justifyContent: "center"}}
         >



          <Typography className={classes.typo} >
            分數 :
          
          <TextField
                // label="分數"
                id="score"
                value={inputs.score}
                onChange={handleChange('score')} 
                size="small"
                variant="outlined"
                className={classes.textfield}
                style={{width:120,marginRight:90}}
            />
            
            

{/* 
            <Typography className={classes.typo} > */}
            標記 :
            <FormControlLabel
            control={<Switch checked={label.label} onChange={handleChangelabel} name="label"
            color="secondary"
            className={classes.label} 
            />}
            />
            
            </Typography>
            {/* </Typography> */}
           {/* <Typography className={classes.typo} >
            標記 :

            <FormControlLabel
                              control={
                              <Checkbox 
                              icon={<RadioButtonUncheckedIcon />} 
                              checkedIcon={<FiberManualRecordIcon />} 
                              checked={state.label}
                              onChange={labelChange}
                              />}
                            /> */}
            {/* <FormControl
            className={classes.label}
             >
            <Select
             className={classes.textfield}
          value={label}
          onChange={handleChangelabel}
          input={<BootstrapInput name="label"/>}
          style={{width:85}}
        >
          <MenuItem value="">
          <ListItemIcon>
             <em>  None </em>
            </ListItemIcon>
          </MenuItem>
          <MenuItem value={1} select>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
          </MenuItem>
      
        </Select>
            </FormControl> */}
       {/* </Typography>      */}
            {/* <TextField
                disabled={label === "" ? true : false }
                label="註記內容"
                id="content"
                value={inputs.content}
                onChange={handleChange('content')} 
                size="small"
                variant="outlined"
                className={classes.textfield}
            /> */}
</div>
{/* <div> */}
            <Autocomplete
            
            //disabled={label === "" ? true : false }
              multiple
              options={comments.map(option => option.title)}
              //defaultValue={[top100Films[1].title]}
              freeSolo
              ChipProps={{ onDelete: () => {} }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  //disabled={label === "" ? true : false }
                  variant="outlined"
                  size="small"
                  label="註記內容"
                  value={inputs.content}
                  onChange={handleChange('content')} 
                  // className={classes.textfield}
                  style={{marginLeft:10,width:240}}
                  fullWidth
                />
              )}
            />


{/* </div> */}
          </div>
          
          </ExpansionPanelDetails>
          </ExpansionPanel>


        </div>
      

      </DialogContent>
      <DialogActions>
        <Button onClick={nosubmitClose} color="default" style={{fontFamily: 'Microsoft JhengHei'}} autoFocus>關閉視窗</Button>
        <Button onClick={submitClick} color="secondary" style={{fontFamily: 'Microsoft JhengHei'}} autoFocus>退回重驗</Button>
        <Button onClick={submitClick} color="primary" style={{fontFamily: 'Microsoft JhengHei'}} autoFocus>完成驗收</Button>
        
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose} >
        <Alert onClose={submitClose} severity="success">
          已儲存！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    </div>
    
  );
};


const comments = [
  { title: "內容不符合要求"},
  { title: "這學生很煩"},
  { title: "做錯作業"},
  { title: "幫助同學"}, 
];