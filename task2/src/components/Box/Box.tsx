import React, { useState } from 'react';

import './Box.css';

import { cnBox } from './Box.classname';

export interface IBoxProps {

}

export const Box: React.FC<IBoxProps> = ({ }) => {
    const [box, setBox] = useState(0);

    const handleCLick = () => {
        if (box === 0) {
            setBox(1);
        } else {
            setBox(0);
        }
    };

    return (
        <div 
            className={box === 0 ? cnBox('Blue') : cnBox('Red')}
            onClick={handleCLick}
        />
        
    );
}
