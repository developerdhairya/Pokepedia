import React from 'react';
import {AppBar, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black',
        zIndex:0,
    },
    Link: {
        textDecoration: 'none',
    },
    Typography: {
        cursor: 'pointer',
        color: "white",
    }
}));

function CustomAppBar(props) {
    return (
        <div>
            <AppBar className={useStyle().AppBar}>
                <Toolbar>
                    <Link to="/" className={useStyle().Link}>
                        <Typography className={useStyle().Typography}>Pokedex</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default CustomAppBar;