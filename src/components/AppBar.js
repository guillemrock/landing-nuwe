import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import {
  Toolbar,
  CssBaseline,
  Tab,
  Tabs,
  AppBar,
  Typography,
  Grid,
} from "@material-ui/core";

import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
  },
  tabLabel: {
    fontSize: "18px",
  },
}));

const DenseAppBar = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Grid container justify={"flex-end"}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              justify={"right"}
            >
              <Tab
                label={<span className={classes.tabLabel}>soy developer</span>}
                component={Link}
                to={"/developers"}
              />
              <Tab
                label={<span className={classes.tabLabel}>soy empresa</span>}
                component={Link}
                to={"/empresas"}
              />
              <Tab
                label={<span className={classes.tabLabel}>pricing</span>}
                component={Link}
                to={"/pricing"}
              />
              <Tab
                label={<span className={classes.tabLabel}>nuwe coins</span>}
                component={Link}
                to={"/coins"}
              />
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DenseAppBar;
