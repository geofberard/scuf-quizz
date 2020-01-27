import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {Employee} from "./data/Employee";
import {Name} from "./data/Name";
import "./PictureWall.scss";

interface PictureWallProps {
    employees: Employee[],
    updateName: (employee: Employee, name: Name) => void
}

export const PictureWall: FC<PictureWallProps> = ({employees, updateName}) => {
    return (
        <div className="PictureWall">
            {employees.map(employee =>
                <Polaroid employee={employee}
                          onNameSelection={updateName}/>)
            }
        </div>
    );
};