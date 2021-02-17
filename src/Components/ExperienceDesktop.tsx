import "../Style/general.scss";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 224,
    alignContent: "middle",
    textAlign: "left",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    verticalAlign: "center",
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
      <h1 className="headings" id="experience">
        My Experience
      </h1>

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
          <h3 className="experienceHeaders">
            <b>Manager @ La Zucca</b>
          </h3>
          <p className="experienceTime">February 2020 - Current</p>
          <ul className="experienceList">
            <li>Ensuring KPIs are met</li>
            <li>Managing crew to ensure shifts are ran smoothly</li>
            <li>Leading crew towards daily, weekly goals</li>
            <li>
              Using critical problem solving to deal with problem as they arise
              and implementing protocols to ensure they are miniised in the
              suture
            </li>
            <li>
              Maintaing high standards of food quality, consistancy, and food
              saftely
            </li>
            <li>
              Ensuring the work place is safe a safe environment and crew are
              happy
            </li>
            <li>Delivering high standards of customer service to patrons</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3 className="experienceHeaders">
            <b>Web Developer @ Liberty Digital</b>
          </h3>
          <p className="experienceTime">October 2019 - October 2020</p>
          <ul className="experienceList">
            <li>Working closely with clients to deliver projects</li>
            <li>Using Wordpress and Shopify to create websites for clients</li>
            <li>Ensuring websites are user-friendly and visually appealing</li>
            <li>
              Delivering websites that are built and designed to maximise user
              traffic and sales
            </li>
            <li>
              Using Javascript, PHP, and CSS to deliver custom features for
              Wordpress sites
            </li>
            <li>Working remotely</li>
            <li>
              Advising, Investigating and Assisting in implementing new
              technologies and services
            </li>
            <li>Ensuring KPIs are met</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3 className="experienceHeaders">
            <b>IT Manager @ La Zucca</b>
          </h3>
          <p className="experienceTime">July 2019 - Current</p>
          <ul className="experienceList">
            <li>Using SEO to increase sales by 20%</li>
            <li>
              Ensuirung IT services are running and maintained appropriately
            </li>
            <li>
              Advising, Investigating and Assisting in implementing new
              technologies and services
            </li>
            <li>
              Maintaining social media platforms, website, and ordering systems
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h3 className="experienceHeaders">
            <b>Team Leader @ Hungry Jacks</b>
          </h3>
          <p className="experienceTime">October 2014 - March 2020</p>
          <ul className="experienceList">
            <li>
              Ensuring shifts ran smoothly by communicating with crew and
              assisting managment
            </li>
            <li>Helping managers reach KPIs</li>
            <li>Mainting high food saftey standards</li>
          </ul>
        </TabPanel>
      </div>
    </div>
  );
}
