import * as React from "react";
import {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import "./Submit.scss"

interface ConfirmDialogProps {
    open: boolean;
    onClose:  () => void;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({open, onClose}) => {
    return (
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">Voila, c'est terminé !</DialogTitle>
                <DialogContent>
                    Les résultats seront communiqués plus tard.
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
    );
}

export default ConfirmDialog;