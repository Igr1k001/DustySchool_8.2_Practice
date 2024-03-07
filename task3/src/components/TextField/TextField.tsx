import React, { ChangeEvent, useState } from 'react';

import './TextField.css';

import { cnTextField } from './TextField.classname';

export interface ITextFieldProps {
    limit?: number;
}

const DEFAULT_VALUE = '';

export const TextField: React.FC<ITextFieldProps> = ({ limit }) => {
    const [text, setText] = useState(DEFAULT_VALUE);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value.slice(0, limit);
        
        setText(newText);
    };



    return (
        <div className={cnTextField()}>
            <input
                className={cnTextField('Input')}
                value={text}
                onChange={handleChange}
            />
            {limit && <div className={cnTextField('RemaindSymbols')}>{limit - text.length}</div>}
        </div>
    );
}
