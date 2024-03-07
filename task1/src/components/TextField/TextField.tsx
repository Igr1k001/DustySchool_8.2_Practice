import React, { ChangeEvent, useState } from 'react';

import './TextField.css';

import { cnTextField } from './TextField.classname';

import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

const DEFAULT_VALUE = '';

export const TextField = () => {
    const [sumNumber, setSumNumber] = useState(0);
    const [text, setText] = useState(DEFAULT_VALUE);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(() => event.target.value);
    };

    const handleCLick = () => {
        let addNumber = Number(text);

        if (isNaN(addNumber)) {
            StatusAlertService.showError('Вы ввели не число');
        } else {
            setSumNumber((prev) => prev + addNumber);
        }

        setText(DEFAULT_VALUE);
    };

    return (
        <div className={cnTextField()}>
            <StatusAlert/>
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
