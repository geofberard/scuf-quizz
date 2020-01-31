import * as React from "react";
import {FC} from "react";
import {Person} from "./data/Person";
import {AppBar, Backdrop, Button, CircularProgress, Modal, Toolbar, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import NameDialog from "./NameDialog";
import ConfirmDialog from "./ConfirmDialog";

import "./Submit.scss"

const API_URL = "https://script.google.com/macros/s/AKfycbz3JX7Pzfu9dT8GHqrpyFplTTPqrbVs3NbrsqHLCTZyx9PjJ2XN/exec";

enum QuizzState {
    PICTURES,
    NAME,
    WAITING,
    DONE,
}

interface QuestionCollectorProps {
    persons: Person[];
    onSubmit:  () => void;
}

const Submit: FC<QuestionCollectorProps> = ({persons, onSubmit}) => {
    const [submitState, setSumbitState] = React.useState(QuizzState.PICTURES);

    const handleClose = () => {
        setSumbitState(QuizzState.PICTURES);
    };

    const handleSubmit = (name: String) => {
        setSumbitState(QuizzState.WAITING);
        const employeeParams = persons
            .filter(employee => employee.name)
            .map(employee => `${employee.id}=${employee.name.id}`)
            .join("&");

        fetch(`${API_URL}?name=${name}&${employeeParams}`,{method: 'GET'})
            .then(() => setSumbitState(QuizzState.DONE));
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className="AppBar-title">
                        Baby Scufette
                    </Typography>
                    <Button color="inherit" onClick={() => setSumbitState(QuizzState.NAME)}>
                        Je&nbsp;valide&nbsp;&nbsp;<SendIcon color="secondary"/>
                    </Button>
                </Toolbar>
            </AppBar>
            <NameDialog persons={persons}
                        open={submitState === QuizzState.NAME}
                        onSubmit={handleSubmit}
                        onClose={handleClose} />
            <Backdrop className={"SplashScreen"} open={submitState === QuizzState.WAITING}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <ConfirmDialog open={submitState === QuizzState.DONE}
                           onClose={handleClose}/>
        </div>
    );
}

export default Submit;