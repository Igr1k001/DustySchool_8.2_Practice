import React, { ChangeEvent, useState } from 'react';

import './TextField.css';

import { cnTextField } from './TextField.classname';


const DEFAULT_VALUE = '';
const limit = 10;

export const TextField = () => {
    const [remaindSymbols, setRemaindSymbols] = useState(limit);
    const [text, setText] = useState(DEFAULT_VALUE);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value.slice(0, 10);
        
        setText(newText);

        setRemaindSymbols(limit - newText.length);
    };



    return (
        <div className={cnTextField()}>
            <input
                className={cnTextField('Input')}
                value={text}
                onChange={handleChange}
            />
            <div className={cnTextField('RemaindSymbols')}>{remaindSymbols}</div>
        </div>
    );
}
