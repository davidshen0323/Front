import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyMenu from './teacher_menu';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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

function QuestionAdd(index){
  
  return(
    <div style={{borderRadius:10, borderStyle:'solid', marginBottom:10, borderColor:'#D0D0D0'}}>
  <Table><center>
            <TableBody>
              <TableRow>
                <TableCell>
                  問題
                </TableCell>
                <TableCell>
                  <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入問題"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  選項A
                </TableCell>
                <TableCell>
                <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入選項"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  選項B
                </TableCell>
                <TableCell>
                <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入選項"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  選項C
                </TableCell>
                <TableCell>
                <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入選項"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  選項D
                </TableCell>
                <TableCell>
                <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入選項"/>
                </TableCell>
              </TableRow>
              </TableBody>
              </center></Table> </div>
              );
              
}

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`考卷 ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};


const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  proot: {
    display: 'flex',
    
  },
  textarea:{
    borderRadius: 10,
    marginLeft: theme.spacing(2),
    width: 300,
    padding:10,
    fontSize:14,
    fontFamily:'微軟正黑體',
  },
  textfield:{
    width:300,
    fontSize:14,
    fontFamily:'微軟正黑體',
  },
  button: {
    margin: theme.spacing(2),
},
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
        <MyMenu/>
        
            <AppBar position="static">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="新增考試" href="/drafts" {...a11yProps(0)} />
                <LinkTab label="查看考卷" href="/trash" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
        <center>考卷名稱：<Input defaultValue="" inputProps={{ 'aria-label': 'description' }} /> </center><br/>
        <div>
          
          <QuestionAdd/>
          <QuestionAdd/>
              <div style={{textAlign:'center'}}>
              <Button variant="contained" color="primary"  style={{ margin:15 }}>新增問題</Button>
              <Button variant="contained" color="primary" style={{ margin:15 }}>發佈考題</Button>
              </div>
         </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Paper className={classes.proot} elevation={3} variant="outlined">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <center>請選擇要查看的考卷：</center>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell ><center>
                <FixedSizeList height={400} width={300} itemSize={40} itemCount={20}>
            {renderRow}
          </FixedSizeList></center>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </TabPanel>
    </div>
  );
}