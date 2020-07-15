import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const EditNameModal = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <form className={classes.root} autoComplete="off">
        <AiOutlineCloseCircle />
        <h3>Edit name:</h3>
        <TextField id="firstName" label="First Name" variant="filled" />
        <TextField id="lastName" label="Last Name" variant="filled" />
        <TextField id="subtitle" label="Subtitle" variant="filled" />
        <Button variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EditNameModal;
