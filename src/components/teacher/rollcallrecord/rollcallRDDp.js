import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import RollcallrecordTable from './rollcallrecordT/rollcallrecordT';
import RollcallrecordSTable from './rollcallrecordS/rollcallrecordS';

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


export default function RollcallRDDp() {
  const [value, setValue] = React.useState(0);
  
  const params = useParams();
  const csid = params.cs_id;

  console.log(csid);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
          <div>
            <AppBar position="static" color="inherite" >
                <Tabs
                value={value}
                onChange={handleChange}
                >
                <LinkTab label="時間查看" href="/rollcallrecordT" {...a11yProps(0)} />
                <LinkTab label="學生查看" href="/rollcallrecordS" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>

            
      <TabPanel value={value} index={0}>
        <RollcallrecordTable/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <RollcallrecordSTable/>
      </TabPanel>
      </div>
  );
}