import React from 'react';
import MyMenu from '../MenuS';
import PropTypes from 'prop-types';
import ApplyRecord from '../applyrecord/applyrecord';
import { makeStyles } from '@material-ui/core/styles';
import {Tab, Box, Typography} from '@material-ui/core';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

  div:{
      height:'100vh',
      background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
    },  
  Paper:{
      width: '90%',
      margin: 'auto',        
  },
});

/*--------------------------------*/

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
      {value === index && <Box p={4}>{children}</Box>}
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





export default function LeaveBlockS() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.div}>
        <MyMenu/>
          
            {/* <AppBar position="static" color="inherit" style={{maxWidth:'95%',margin:'auto'}}>
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
               
                <LinkTab label="請假申請" href="/leavemanage" {...a11yProps(0)} style={{ fontFamily:'微軟正黑體'}}/>
                <LinkTab label="請假申請記錄" href="/leavemanage" {...a11yProps(1)} style={{ fontFamily:'微軟正黑體'}}/>
                
            
                </Tabs>
            </AppBar> */}

      {/* <TabPanel value={value} index={0}>
        <Leave/>
      </TabPanel> */}

      {/* <TabPanel value={value} index={1}> */}
        <ApplyRecord/>
      {/* </TabPanel> */}


    </div>
  );
}