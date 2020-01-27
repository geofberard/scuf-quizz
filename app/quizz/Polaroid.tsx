import * as React from 'react';
import {FC} from 'react';
import {TextField} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import {Employee} from "./data/Employee";
import {allNames} from "./data/EmployeeData";
import {Name} from "./data/Name";
import "./Polaroid.scss"

interface PolaroidProps {
    employee: Employee,
    onNameSelection: (employee: Employee, name: Name) => void
}

export const Polaroid: FC<PolaroidProps> = ({employee, onNameSelection}) => {
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={`Polaroid ${focused ? "focused" : ""}`}
             onClick={() => !focused ? setFocused(true) : ""}>
            <img className={"Polaroid-picture"} src={"img/employee/" + employee.picture}/>
            <div className={"Polaroid-label"}>
                {!focused ? (employee.name ? employee.name.label : "Je suis ..." ) : (
                    <Autocomplete
                        id="combo-box-demo"
                        options={allNames}
                        getOptionLabel={(name: Name) => name.label}
                        value={employee.name}
                        onChange={(event, newValue) => {
                            onNameSelection(employee, newValue);
                            setFocused(false);
                        }}
                        renderInput={params => (
                            <TextField {...params}
                                       onBlur={() => setFocused(false)}
                                       fullWidth
                                       autoFocus={focused}/>
                        )}
                    />
                )}
            </div>
        </div>
    );
}
