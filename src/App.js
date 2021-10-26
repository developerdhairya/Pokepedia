import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import CustomAppBar from "./components/CustomAppBar";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";


function App(props) {
    return (
        <BrowserRouter>
            <CustomAppBar/>
            <Route  component={Pokedex} path="/" />
            <Route component={PokemonDetailsPage} path="/pokemon/:id"/>
        </BrowserRouter>
    );
}

export default App;