import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h1.fontSize,
    color: "#FFFFFF",
    textTransform: "uppercase",
    textShadow: [
      "0px 0px 18.523px rgba(1, 221, 115, 0.7)",
      "0px 0px 71.7083px rgba(1, 221, 115, 0.5)",
    ],
    filter: "blur(0.5px)",
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    color: "#FFFFFF",
    textTransform: "uppercase",
    textShadow: [
      "0px 0px 18.523px rgba(1, 221, 115, 0.7)",
      "0px 0px 71.7083px rgba(1, 221, 115, 0.5)",
    ],
    filter: "blur(0.5px)",
  },
  grid: {
    marginTop: "60px",
    marginBottom: "60px",
    alignItems: "center",
  },
}));

export default useStyles;
