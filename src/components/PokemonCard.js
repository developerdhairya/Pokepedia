import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    CardMedia: {
        margin: "auto",
        width: 130,
        height: 130,
    },
    Card: {
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: "rgb(90,90,90)",
        }
    },
    CardContent: {
        textAlign: "center",
    },
    link:{
        textDecoration:"none",
    }
}))


function PokemonCard(props) {
    const pokemon = props.pokemon;
    return (
        <Grid item xs={12} sm={2} key={pokemon.id}>
            <Link className={useStyles().link} to={"/pokemon/"+pokemon.id}>
                <Card className={useStyles().Card}>
                    <CardMedia className={useStyles().CardMedia} image={pokemon["imgURL"]}> </CardMedia>
                    <CardContent className={useStyles().CardContent}>
                        <Typography>{pokemon["name"]}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default PokemonCard;