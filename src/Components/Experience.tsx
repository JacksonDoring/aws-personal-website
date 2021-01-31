import "../Style/general.css";
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="experienceDiv">
      <h1 className="headings" id="experience">My Experience</h1> 
    
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="La Zucca Manger" {...a11yProps(0)} />
        <Tab label="Liberty Digital" {...a11yProps(1)} />
        <Tab label="La Zucca IT Manager" {...a11yProps(2)} />
        <Tab label="Hungry Jacks" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3 className="experienceHeaders"><b>Manager @ La Zucca</b></h3>
        <p className="experienceTime">February 2020 - Current</p>
        <ul className="experienceList">
          <li>Example</li>
          <li>Example</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3 className="experienceHeaders"><b>Web Developer @ Liberty Digital</b></h3>
        <p className="experienceTime">October 2019 - October 2020</p>
        <ul className="experienceList">
          <li>Example</li>
          <li>Example</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h3 className="experienceHeaders"><b>IT Manager @ La Zucca</b></h3>
        <p className="experienceTime">July 2019 - Current</p>
        <ul className="experienceList">
          <li>Example</li>
          <li>Example</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h3 className="experienceHeaders"><b>Crew @ Hungry Jacks</b></h3>
        <p className="experienceTime">October 2014 - March 2020</p>
        <ul className="experienceList">
          <li>Example</li>
          <li>Example</li>
        </ul>
      </TabPanel>
    </div>
    </div>
  );
}
