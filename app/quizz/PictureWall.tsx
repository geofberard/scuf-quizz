import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {Person} from "./data/Person";
import "./PictureWall.scss";

interface PictureWallProps {
    persons: Person[],
    label: string,
    getLabel: (person: Person) => string,
}

export const PictureWall: FC<PictureWallProps> = ({persons, label, getLabel}) => {
    return (
        <div className="PictureWall">
            <div className="PictureWall-title">{label}</div>
            <div className="PictureWall-stats">
                {persons.map(person => <Polaroid person={person} getLabel={getLabel}/>)}
            </div>
        </div>
    );
};