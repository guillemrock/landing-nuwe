import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#232730" },
    secondary: { main: "rgba(1, 221, 115, 0.7)" },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"],
    h1: {
      fontSize: "3.5rem",
      "@media (min-width:750px)": {
        fontSize: "4rem",
      },
      "@media (min-width:950px)": {
        fontSize: "4.5rem",
      },
    },
    body1: {
      fontSize: "14",
      lineHeight: "30px",
      "@media (min-width:800px)": {
        fontSize: "22px",
        lineHeight: "45px",
      },
    },
  },
});

export default theme;
