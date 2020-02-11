import * as React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

import "./Submit.scss"

const Submit = () => (
    <div>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" className="AppBar-title">
                    Baby Scufette
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default Submit;