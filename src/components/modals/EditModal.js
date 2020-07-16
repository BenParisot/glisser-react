import React, { useState, useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { CharacterContext } from "../../CharacterContext";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "200px",
    left: "35%",
    zIndex: "100",
    background: "white",
    border: "1px solid lightgrey",
    margin: theme.spacing(1),
    width: "35ch",
    padding: "10px 10px 30px 10px",
    borderRadius: "10px",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  closeIcon: {
    marginBottom: "55px",
  },
  title: {
    marginLeft: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "0 45px",
  },
  textField: {
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#fffa8e",
  },
}));

const EditModal = () => {
  const classes = useStyles();
  const { setIsOpen, updateCharacter, character, isOpen, key } = useContext(
    CharacterContext
  );

  const [formValues, setFormValues] = useState({
    firstName: character.firstName,
    lastName: character.lastName,
    subtitle: character.subtitle,
    bio: character.bio,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const formFields = () => {
    switch (key) {
      case "Name":
        return (
          <>
            <TextField
              className={classes.textField}
              id="firstName"
              label={formValues.firstName}
              variant="filled"
              onChange={handleChange}
            />
            <TextField
              className={classes.textField}
              id="lastName"
              label={formValues.lastName}
              variant="filled"
              onChange={handleChange}
            />
            <TextField
              className={classes.textField}
              id="subtitle"
              label={formValues.subtitle}
              variant="filled"
              onChange={handleChange}
            />
          </>
        );
      case "Bio":
        return (
          <TextField
            id="bio"
            label="Bio"
            multiline
            rows={4}
            defaultValue={formValues.bio}
            variant="filled"
            className={classes.textField}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Fade in={isOpen}>
      <Container className={classes.container} fixed>
        <div className={classes.modalHeader}>
          <h3 className={classes.title}>{`Edit Your ${key}`}</h3>
          <AiOutlineCloseCircle
            onClick={() => setIsOpen(!isOpen)}
            className={classes.closeIcon}
          />
        </div>
        <form className={classes.form} autoComplete="off">
          {formFields()}
          <Button
            name="bio"
            onClick={() => updateCharacter(formValues)}
            variant="contained"
            className={classes.button}
          >
            Save
          </Button>
        </form>
      </Container>
    </Fade>
  );
};

export default EditModal;
