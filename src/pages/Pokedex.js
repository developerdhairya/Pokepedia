import React, {useEffect, useState} from 'react';
import CustomAppBar from "../components/CustomAppBar";
import axios from "axios";
import {POKEMON_API_URL, POKEMON_IMAGE_URL} from "../config";
import {Box, CircularProgress, Grid} from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

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
                console.log(pokemonData);
            }
        });
    });

    return (
        <Box>
            <CustomAppBar/>
            <div>
                {pokemonData !== [] ? (
                    <Grid container spacing={2}>
                        {
                            pokemonData.map((pokemonObj) => {
                                return <PokemonCard pokemon={pokemonObj}/>
                            })
                        }
                    </Grid>
                ) : <CircularProgress/>}
            </div>
        </Box>
    );
};

export default Pokedex;

