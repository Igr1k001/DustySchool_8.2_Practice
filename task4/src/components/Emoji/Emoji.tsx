import React, { useState } from 'react';

import './Emoji.css';

import { cnEmoji } from './Emoji.classname';


export const Emoji = () => {
    const [numberClick, setNumberClick] = useState(1);
    const [content, setContent] = useState('😑');
    const emojiObj: Record<number, string> = {
        3: '🙂',
        6: '😀',
        9: '😁',
        12: '😆',
        15: '😂',
        18: '💥'
    }

    const handleCLick = () => {
        setNumberClick(numberClick + 1);
        const emoji = emojiObj[numberClick];

        if (emoji) {
            setContent(emoji);
        }
    };

    return (
        <div 
            className={cnEmoji()}
            onClick={handleCLick}
        >
            {content}
        </div>
        
    );
}
