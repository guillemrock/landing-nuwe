import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary,

    margin: "auto",
    width: "100%",
    textAlign: "center",
    height: "100%",
    display: "table",
    position: "absolute",
  },
  content: {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
  },
  title: {
    display: "block",
    marginLeft: "25%",
    width: "50%",
    justifyContent: "center",
    color: "#fff",
    fontSize: theme.typography.h1,
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
    textTransform: "uppercase",
    textShadow: [
      "0px 0px 18.523px rgba(1, 221, 115, 0.7)",
      "0px 0px 71.7083px rgba(1, 221, 115, 0.5)",
    ],
    filter: "blur(0.5px)",
  },
  text: {
    display: "block",
    width: "50%",
    marginLeft: "25%",
    textAlign: "center",
    marginTop: "20px",
    lineHeight: theme.typography.body1,
    fontStyle: "normal",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "500",
    fontSize: theme.typography.body1,
    letterSpacing: "0.2em",
    color: "#fff",
    textTransform: "uppercase",
    textShadow: [
      "0px 0px 18.523px rgba(1, 221, 115, 0.7)",
      "0px 0px 71.7083px rgba(1, 221, 115, 0.5)",
    ],
    filter: "blur(0.5px)",
  },
  button1: {
    marginTop: 40,
    width: "18em",
    height: "5em",
    backgroundColor: "#E9FFEB",
    boxShadow: [
      "0px 0px 18.523px rgba(1, 221, 115, 0.7)",
      "0px 0px 71.7083px rgba(1, 221, 115, 0.5)",
    ],
    borderRadius: "5px",
  },
  button2: {
    marginTop: 40,
    width: "18em",
    height: "5em",
    border: "4px solid #FFFFFF",
    variant: "outline",
    boxShadow: "inset 0px 0px 7.17083px rgba(1, 221, 115, 0.5)",
    filter:
      "drop-shadow(0px 0px 18.523px rgba(1, 221, 115, 0.7))drop-shadow(0px 0px 71.7083px rgba(1, 221, 115, 0.5))",
    borderRadius: "5px",
  },
  btn_text: {
    fontFamily: theme.typography.fontFamily,
    fontSize: "22px",
    color: "rgba(39, 190, 117, 0.5)",
    letterSpacing: "0.15em",
  },
  btn_text2: {
    fontFamily: theme.typography.fontFamily,
    fontSize: "22px",
    color: "#E9FFEB",
    letterSpacing: "0.15em",
    fontWeight: "thin",
  },
  logo: {
    position: "absolute",
    width: "150px",
    left: "0",
    top: "0",
  },
  bg_image: {
    position: "absolute",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
  },
}));

export default useStyles;
