import * as React from 'react';
import {FC} from 'react';
import {PictureWall} from "./PictureWall";
import {Snowfall} from "./Snowfall";
import Submit from "./Submit";
import {useEmployeeData} from "./useEmployeeData";
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
    const [employees, updateName] = useEmployeeData();
    return (
        <div className="Quizz">
            <ThemeProvider theme={theme}>
            <Submit employees={employees} onSubmit={console.log}/>
            <Snowfall/>
            <PictureWall employees={employees} updateName={updateName}/>
            </ThemeProvider>
        </div>
    );
}