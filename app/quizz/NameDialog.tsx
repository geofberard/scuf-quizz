import * as React from "react";
import {FC} from "react";
import {Employee} from "./data/Employee";
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
    employees: Employee[];
    open: boolean;
    onSubmit:  (name:string) => void;
    onClose:  () => void;
}

const NameDialog: FC<NameDialogProps> = ({employees, open, onSubmit, onClose}) => {
    const [name, setName] = React.useState("");
    const identified = employees.filter(e => e.name).length;
    let complete = identified < employees.length;

    return (
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{complete ? "Attends un peu ..." : "Une dernière chose ..."}</DialogTitle>
                <DialogContent>
                    {complete ? (
                        <>
                            <DialogContentText>{identified === 0 ? `Aucune identification ...` : `Seulement ${identified} identifications ...`}</DialogContentText>
                            <DialogContentText>{`Mais si tu veux quand même soumettre, il ne manque que ton nom :)`}</DialogContentText>
                        </>
                    ) : (
                        <>
                            <DialogContentText>{"Tu as identifié tout le monde !!!"}</DialogContentText>
                            <DialogContentText>{`Il ne manque plus que ton nom :)`}</DialogContentText>
                        </>
                    )}
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