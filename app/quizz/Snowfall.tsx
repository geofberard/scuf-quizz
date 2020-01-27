import * as React from 'react';
import {FC} from 'react';
import "./Snowfall.scss"

export const Snowfall: FC = () => (
    <div className="Snowfall">
        <div className="Snow near top"/>
        <div className="Snow near bottom"/>

        <div className="Snow mid top"/>
        <div className="Snow mid bottom"/>

        <div className="Snow far top"/>
        <div className="Snow far bottom"/>
    </div>
);