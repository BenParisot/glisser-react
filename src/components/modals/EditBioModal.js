import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid lightgrey",
    margin: theme.spacing(1),
    width: "35ch",
    padding: "10px 10px 30px 10px",
    borderRadius: "10px",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  closeIcon: {
    marginBottom: '55px',
  },
  title: {
    marginLeft: '25px',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: '0 45px',
  },
  textField: {
    marginBottom: '25px',
  },
}));

const EditBioModal = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} fixed>
      <div className={classes.modalHeader}>
        <h3 className={classes.title}>Edit Your Bio:</h3>
        <AiOutlineCloseCircle className={classes.closeIcon}/>
      </div>
      <form className={classes.form} autoComplete="off">
        <TextField
          id="filled-multiline-static"
          label="Bio"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          className={classes.textField}
        />
        <Button variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EditBioModal;
