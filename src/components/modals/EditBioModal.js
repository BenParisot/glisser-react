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

const EditBioModal = () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <form className={classes.root} autoComplete="off">
        <AiOutlineCloseCircle />
        <h3>Edit bio:</h3>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
        <Button variant="contained" color="primary">Save</Button>
      </form>
    </Container>
  );
};

export default EditBioModal;
