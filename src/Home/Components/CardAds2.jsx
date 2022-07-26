import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        width: "325px",
        heigth: "600px",
        margin: "30px",
        marginLeft: "82px"

    },

    content: {
        backgroundColor: "#F5F5F5",
        height: 80,
    },

    image: {
        width: "600px",
        maxWidth: "100%",
        maxHeight: 230,
        minHeight: 200,
        display: "flex",
        justifyContent: "center",
        margin: "auto",
    },

    title: {
        fontSize: "1.25em",
        fontWeight: "bold",
        color: "#4C9A62",
        textAlign: "center",
        marginBottom: 6,
    },

    price: {
        color: "#000000",
        textAlign: "center",
        fontSize: "45px",
        fontWeight: "bolder",
        marginTop: "10px",
    },

    delivery: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "",
        paddingTop: "5px",
        border: "",
        marginLeft: "10px",
        paddingLeft: "10px",
        height: 20,
        width: "40%",
        fontFamily: "Lust Regular",
        fontSize: "1.4em",
    },

    ville: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "",
        paddingTop: "5px",
        border: "",
        marginLeft: "10px",
        paddingLeft: '10px',
        height: 20,
        width: "40%",
        fontFamily: "Lust Regular",
        fontSize: "1.4em",
    }
}));

export default function CardAds(props) {

    const classes = useStyles();
    const photos = props.photoA;
    return (

        <div>

            <Card className={classes.root}>

                <CardActionArea>
                    <p className={classes.ville}>
                        {props.country}
                    </p>
                    <p className={classes.delivery}>
                        Livraison : {props.delivery}
                    </p>

                    <div className={classes.contain}>
                        <img
                            className={classes.image}
                            src={
                                props.photoA && photos.length > 0
                                    ? photos[0]
                                    : "/flower.png"
                            }
                        />
                    </div>
                    <CardContent className={classes.content}>
                        <Typography className={classes.title}>
                            {props.title}
                        </Typography>
                        <Typography className={classes.price}>
                            Prix : {props.priceWanted} €
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
}

