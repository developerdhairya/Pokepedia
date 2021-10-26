import React, {Component} from 'react';
import axios from "axios";
import {POKEMON_API_URL} from "../config";
import {Box, CircularProgress, Typography, withStyles} from "@material-ui/core";
import {createRenderer} from "react-dom/test-utils";

const styles=(theme)=>({
    pokedexContainer:{
        height:"84vh",
        backgroundColor:"black",
        color:"white",
        marginTop:75,
        textAlign:"center",
        borderRadius:5,
        paddingTop:30,
    },
    textTitle:{
        textTransform:"upperCase",
        fontFamily:"Sans-Serif",
    },
    pokemonImage:{
        width:"170px",
        height: "170px",
    }
});


class PokemonDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            pokemon:null
        }
    }

    componentDidMount() {
        console.log(this.props);
        const {id}=this.props.match?.params;
        axios.get(POKEMON_API_URL+"/"+id).then((response)=>{
            if(response.status>=200 && response.status<300){
                this.setState({pokemon:response.data});
                console.log(response.data);
            }
        });
    }

    render() {
        const {classes}=this.props;
        const {pokemon}=this.state;
        if(pokemon){
            const {name}=pokemon;
            return(<Box>
                <Box className={classes.pokedexContainer}>
                    <Typography className={classes.textTitle } variant={"h1"}>
                        {name}
                    </Typography>
                </Box>
            </Box>);
        }else {
            return <CircularProgress/>;
        }

    }
}

export default withStyles(styles)(PokemonDetailsPage);