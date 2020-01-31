import * as React from 'react';
import {FC} from 'react';
import {TextField} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import {Person} from "./data/Person";
import {allNames} from "./data/PlayerData";
import {Name} from "./data/Name";
import "./Polaroid.scss"

interface PolaroidProps {
    person: Person,
    onNameSelection: (person: Person, name: Name) => void
}

export const Polaroid: FC<PolaroidProps> = ({person, onNameSelection}) => {
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={`Polaroid ${focused ? "focused" : ""}`}
             onClick={() => !focused ? setFocused(true) : ""}>
            <img className={"Polaroid-picture"} src={"public/img/scufettes/" + person.picture}/>
            <div className={"Polaroid-label"}>
                {!focused ? (person.name ? person.name.label : "Je suis ..." ) : (
                    <Autocomplete
                        id="combo-box-demo"
                        options={allNames}
                        getOptionLabel={(name: Name) => name.label}
                        value={person.name}
                        onChange={(event, newValue) => {
                            onNameSelection(person, newValue);
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
