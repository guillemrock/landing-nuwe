import React from "react";
import { home } from "../data";
import { Link } from "react-router-dom";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
} from "@material-ui/core";

import useStyles from "../style";
import logo from "../images/logo.svg";

const Index = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <div className={classes.content}>
            <div>
              <img src={logo} className={classes.logo} />
            </div>
            <Container>
              <Typography variant="h1" className={classes.title}>
                {home[0].title}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                {home[0].subtitle}
              </Typography>
              <div>
                <Grid container spacing={6} justify="center">
                  <Grid item>
                    <Button
                      component={Link}
                      to={"/empresas"}
                      variant="outlined"
                      color="#ffffff"
                      className={classes.button1}
                    >
                      <Typography className={classes.btn_text}>
                        soy empresa
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to={"/developers"}
                      variant="outlined"
                      className={classes.button2}
                    >
                      <Typography className={classes.btn_text2}>
                        soy talento
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
