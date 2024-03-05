import React, { ChangeEvent, useState } from 'react';

import './TextField.css';

import { cnTextField } from './TextField.classname';

export interface ITextFieldProps {

}

const DEFAULT_VALUE = '';

export const TextField: React.FC<ITextFieldProps> = ({ }) => {
    const [sumNumber, setSumNumber] = useState(0);
    const [text, setText] = useState(DEFAULT_VALUE);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(() => event.target.value);
    };

    const handleCLick = () => {
        let addNumber = Number(text);

        if (isNaN(addNumber)) {
            alert('Введено не число');
        } else {
            setSumNumber(sumNumber + addNumber);
        }

        setText(DEFAULT_VALUE);
    };



    return (
        <div className={cnTextField()}>
            <input
                className={cnTextField('Input')}
                value={text}
                onChange={handleChange}
            />
            <div className={cnTextField('Result')}>{sumNumber}</div>
            <button className={cnTextField('Button')} onClick={handleCLick}>Нажми</button>
        </div>
    );
}
