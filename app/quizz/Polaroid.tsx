import * as React from 'react';
import {FC} from 'react';
import {Person} from "./data/Person";
import "./Polaroid.scss"

interface PolaroidProps {
    person: Person,
    getLabel: (person: Person) => string,
}

export const Polaroid: FC<PolaroidProps> = ({person, getLabel}) => {
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={`Polaroid ${focused ? "focused" : ""}`}
             onClick={() => !focused ? setFocused(true) : ""}>
            <img className={"Polaroid-picture"} src={"public/img/scufettes/" + person.picture}/>
            <div className={"Polaroid-label"}>
                {getLabel(person)}
            </div>
        </div>
    );
}
