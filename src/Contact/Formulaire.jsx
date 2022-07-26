// Formulaire de contact

import React, { useState } from "react";

import { Button, Grid, TextField, makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "30%",
    height: "50px",
    marginLeft: "35%",
    marginBottom: "100px",

  },
  card: {
    height: "700px", width: "490px", marginBottom: "50%", marginTop: "25px", boxShadow: "2px 2px 10px black", fontFamily: "Lust Regular",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "92px",
      width: "523px"

    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-7px",
      width: "473px"

    },
  },
  contact: {
    display: "flex", justifyContent: "space-between", marginLeft: "30px", marginRight: "170px", marginTop: "4%", fontFamily: "Lust Regular", marginLeft: "7px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "15px"

    },
  },
  p1: {
    marginTop: "50px", fontSize: "1.4em", textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      width: "431px",
      marginLeft: "128px"

    },
    [theme.breakpoints.down("xs")]: {
      width: "431px",
      marginLeft: "13px"

    },
  },
  p2: {
    marginTop: "50px", fontSize: "1.4em", textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      width: "389px",
      marginLeft: "128px"

    },
    [theme.breakpoints.down("xs")]: {
      width: "389px",
      marginLeft: "16px"

    },
  }
}))

export default function Formulaire(props) {
  const classes = useStyles();
  const [lastname, setLastname] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {
    setLastname(e.target.value);
    setFirstname(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div className={classes.contact}>
      <div>
        <h1 style={{ color: "#4C9A62" }}>Contactez-nous</h1>
        <p className={classes.p1}>
          Nous avons à coeur de vous offrir la meilleure expérience possible sur
          notre site.
        </p>
        <p className={classes.p2}>
          Si vous rencontrez des difficultés avec votre compte ou si vous avez
          des questions <br /> à propos de notre plateforme, n'hésitez pas à nous
          contacter.
        </p>
      </div>
      <Card className={classes.card}>
        <h3 style={{ textAlign: "center", fontFamily: "Lust Regular", color: "#33FF93", fontSize: "1.4em" }}>Envoyez-nous un message</h3>
        <div>
          <Grid style={{ marginLeft: "25px", marginBottom: "30px", width: "1050px", marginTop: "40px" }}>
            <Grid item xs={5} sm={5}>
              <TextField
                placeholder="Nom"
                label="Nom"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                autoComplete="lastname"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid style={{ marginLeft: "25px", marginBottom: "15px", width: "1050px", marginTop: "40px" }}>
            <Grid item xs={5} sm={5}>
              <TextField
                placeholder="Prénom"
                label="Prénom"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                autoComplete="firstname"
                fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid>
            {/* email */}
            <Grid style={{ marginLeft: "25px", marginBottom: "30px", width: "1050px", marginTop: "10px" }}>
              <Grid item xs={5} sm={5}>
                <TextField
                  placeholder="Email "
                  label="Email "
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
            </Grid>
            <br />
            <TextField
              style={{ height: "200px", width: "435px", maxHeight: "auto", marginLeft: "25px", marginTop: "5px" }}
              id="outlined-multiline-static"
              label="Votre message"
              multiline
              rows={8}
              onChange={(e) => handleChange(e)}
              variant="outlined"


            />
          </Grid>
          <br />
          <Button
            className={classes.button}

            type="submit"
            fullWidth
            variant="contained"
          >
            Envoyez
          </Button>
        </div>
      </Card>
    </div>
  );
}
