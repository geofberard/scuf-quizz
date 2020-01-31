import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {Person} from "./data/Person";
import {Name} from "./data/Name";
import "./PictureWall.scss";

interface PictureWallProps {
    persons: Person[],
    updateName: (person: Person, name: Name) => void
}

export const PictureWall: FC<PictureWallProps> = ({persons, updateName}) => {
    return (
        <div className="PictureWall">
            {persons.map(person =>
                <Polaroid person={person}
                          onNameSelection={updateName}/>)
            }
        </div>
    );
};