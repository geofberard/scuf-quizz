import * as React from 'react';
import {FC} from 'react';
import {PictureWall} from "./PictureWall";
import {Snowfall} from "./Snowfall";
import Submit from "./Submit";
import {usePersonData} from "./usePersonData";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import "./Quizz.scss"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b72424',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

export const Quizz: FC = () => {
    const [persons, updateName] = usePersonData();
    return (
        <div className="Quizz">
            Ttest
            <ThemeProvider theme={theme}>
            <Submit persons={persons} onSubmit={console.log}/>
            <Snowfall/>
            <PictureWall persons={persons} updateName={updateName}/>
            </ThemeProvider>
        </div>
    );
}