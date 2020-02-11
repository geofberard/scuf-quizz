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
            main: '#2427b7',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

export const Quizz: FC = () => {
    const [scorePersons] = usePersonData((p1, p2) => p2.name.score - p1.name.score);
    const [foundPersons] = usePersonData((p1, p2) => p1.name.found - p2.name.found);

    return (
        <div className="Quizz">
            <ThemeProvider theme={theme}>
            <Submit />
            <Snowfall/>
            <PictureWall persons={scorePersons} getLabel={person => `${person.name.label} (${person.name.score}%)`} label="Les résultats sont :"/>
            <PictureWall persons={foundPersons} getLabel={person => `${person.name.label} (${person.name.found}%)`} label="Qui sont les plus difficiles à trouver ?"/>
            </ThemeProvider>
        </div>
    );
}