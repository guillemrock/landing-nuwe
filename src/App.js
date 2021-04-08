import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
// import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";
import logo from "./logo.svg";
import todo from "./images/todo.png";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      {/* <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          <img src="./images/Nuwe_logo.png" alt="" />
          <CardMedia image="./images/Nuwe_logo.png" />
        </Toolbar>
      </AppBar> */}
      <main>
        <div>
          <img src={todo} className={classes.bg_image} />
        </div>
        <div className={classes.container}>
          {/* <div>
            <img src={logo} className={classes.image} />
          </div> */}
          <div className={classes.content}>
            <div>
              <img src={logo} className={classes.logo} />
            </div>
            {/* <div>
              <img src={todo} className={classes.bg_image} />
            </div> */}

            <Container>
              <Typography variant="h1" className={classes.title}>
                el match perfecto entre devs y empresas
              </Typography>
              <Typography variant="body1" className={classes.text}>
                en nuwe creamos el match perfecto entre empresas y
                desarrolladores gracias a la validación de aptitudes a través de
                hackathones
              </Typography>
              <div>
                <Grid container spacing={6} justify="center">
                  <Grid item>
                    <Button className={classes.button1}>
                      <Typography className={classes.btn_text}>
                        soy empresa
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" className={classes.button2}>
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

export default App;
