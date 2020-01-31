import * as React from "react";
import {FC} from "react";
import {Person} from "./data/Person";
import {
    Button, CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import "./Submit.scss"

interface NameDialogProps {
    persons: Person[];
    open: boolean;
    onSubmit:  (name:string) => void;
    onClose:  () => void;
}

const NameDialog: FC<NameDialogProps> = ({persons, open, onSubmit, onClose}) => {
    const [name, setName] = React.useState("");
    const identified = persons.filter(e => e.name).length;
    let complete = identified < persons.length;

    return (
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{complete ? "Attends un peu ..." : "Une dernière chose ..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Tu es sûre de ton choix ?</DialogContentText>
                    <DialogContentText>
                        Tu peux encore changer d’avis. Sinon il ne manque plus que ton prénom. :)
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Je suis"
                        type="email"
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Changer
                    </Button>
                    <Button onClick={() => onSubmit(name)} color="primary" disabled={name === ""}>
                        Envoyer
                    </Button>
                </DialogActions>
            </Dialog>
    );
}

export default NameDialog;