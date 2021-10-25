import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import CustomAppBar from "./components/CustomAppBar";


function App(props) {
    return (
        <BrowserRouter>
            <Route  component={Pokedex} path="/" />
        </BrowserRouter>
    );
}

export default App;