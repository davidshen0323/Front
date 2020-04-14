import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyMenu from '../../Menu';
import Rollcallrecord from './rollcallrecord';

//import RollcallrecordTable from './rollcallrecordT/rollcallrecordT';
//import RollcallrecordSTable from './rollcallrecordS/rollcallrecordS';

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
      {value === index && <Box p={2}>{children}</Box>}
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
        width: '100%',
    },
    paper: {
      width: '100%',
      margin: 'auto',
      marginBottom: theme.spacing(2),
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


export default function RollcallRD() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
          <div>

          
<MyMenu/>
        <br/><br/><br/>
        <center><label><h1>專題</h1></label> </center>

            <AppBar position="static" color="inherite" >
                <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                >
                <LinkTab label="點名中" href="/rollcallrecordT" {...a11yProps(0)} />
                <LinkTab label="點名記錄" href="/rollcallrecordS" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>

            
      <TabPanel value={value} index={0}>
        {/* <RollcallrecordTable/> */}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Rollcallrecord/>
      </TabPanel>
      </div>
  );
}