import React from "react";
import DenseAppBar from "../../components/AppBar";

import { developers } from "../../data";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
} from "@material-ui/core";

import useStyles from "./style";
import logo from "../../images/logo.svg";
import devs from "../../images/devs_1.svg";
import videogames from "../../images/videogames.svg";
import demium from "../../images/logos_companies/demium.svg";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("../../images/logos_companies", false, /\.(png|jpe?g|svg)$/)
// );

const Developers = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <div className={classes.content}>
            <Container>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={6}
                justify="center"
                position="relative"
              >
                <Grid item xs={6}>
                  <Typography variant="h1" className={classes.title}>
                    {developers[0].title}
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    {developers[0].subtitle}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <img src={devs} alt="image" style={{ width: "100%" }} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={6}
                className={classes.grid}
              >
                <Typography variant="body1" className={classes.text}>
                  {developers[0].texto_empresas}
                </Typography>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Grid item xs={3}>
                    <img src={demium} alt="demium" />
                  </Grid>
                  <Grid item xs={3}>
                    <img src={demium} alt="demium" />
                  </Grid>
                  <Grid item xs={3}>
                    <img src={demium} alt="demium" />
                  </Grid>
                  <Grid item xs={3}>
                    <img src={demium} alt="demium" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={6}
                className={classes.grid}
              >
                <Typography
                  variant="h1"
                  className={classes.title}
                  align="center"
                >
                  {developers[0].title_2}
                </Typography>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Grid item xs={4}>
                    <Typography variant="body1" className={classes.text}>
                      {developers[0].texto_2_1}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={videogames} alt="" align="center" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      className={classes.text}
                      align="right"
                    >
                      {developers[0].texto_2_2}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
};

export default Developers;
