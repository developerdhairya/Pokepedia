import React, {useEffect, useState} from 'react';
import CustomAppBar from "../components/CustomAppBar";
import axios from "axios";
import {POKEMON_API_URL, POKEMON_IMAGE_URL} from "../config";
import {Box, CircularProgress, Grid, makeStyles} from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const useStyles=makeStyles(()=>({
    pokedexContainer:{
        textAlign:"center",
        padding:"80px 10px 0px 10px",
        backgroundColor:"rgb(68,68,68)",
    },
}));

function Pokedex(props) {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
            if (response.status >= 200 && response.status < 300) {
                const data = response.data.results;
                let pokemonObjectsArray = [];
                data.forEach((element, index) => {
                    let pokemonObject = {
                        id: index + 1,
                        imgURL: POKEMON_IMAGE_URL + (index + 1) + ".png",
                        name: element.name,
                    }
                    pokemonObjectsArray.push(pokemonObject);
                });
                setPokemonData(pokemonObjectsArray);
            }
        });
    });
    var style=useStyles();
    return (
        <Box>
            <div>
                {pokemonData !== [] ? (
                    <Grid className={style.pokedexContainer} container spacing={2}>
                        {
                            pokemonData.map((pokemonObj) => {
                                return <PokemonCard pokemon={pokemonObj} key={pokemonObj.id} />
                            })
                        }
                    </Grid>
                ) : <CircularProgress/>}
            </div>
        </Box>
    );
};

export default Pokedex;

