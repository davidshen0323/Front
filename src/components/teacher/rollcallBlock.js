import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyMenu from '../Menu';

import Rollcall from './rollcall/rollcall';
import RollcallRecord from './rollcallrecord/rollcallrecord';
import Leavemanage from './leaveMN/leavemanage';
import Member from './member/member';

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



/*--------------------------------------------*/
const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  proot: {
    display: 'flex',
    padding:20,
    
  },
  button: {
    margin: theme.spacing(2),
},
}));
/*---------------------------------------*/


export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
        <MyMenu/>
          <br/><br/><br/>
            <center><label><h1>專題</h1></label> </center>
            <AppBar position="static" color="inherit">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="點名" href="/rollcall" {...a11yProps(0)} />
                <LinkTab label="點名紀錄" href="/rollcallrecord" {...a11yProps(1)} />
                <LinkTab label="請假審核" href="/leavemanage" {...a11yProps(2)} />
                <LinkTab label="班級名單" href="/member" {...a11yProps(3)} />
            
                </Tabs>
            </AppBar>

            
      <TabPanel value={value} index={0}>
        <Rollcall/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <RollcallRecord/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Leavemanage/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Member/>
      </TabPanel>
    </div>
  );
}