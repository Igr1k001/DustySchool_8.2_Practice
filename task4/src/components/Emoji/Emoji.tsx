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

        // switch (numberClick) {
        //     case 3: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        //     case 6: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        //     case 9: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        //     case 12: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        //     case 15: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        //     case 18: 
        //         setContent(emojiObj[numberClick]);
        //         break;
        // }

        const emoji = emojiObj[numberClick];

        if (emoji) {
            setContent(emoji);
        }
        // setContent(emojiObj[numberClick]);
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
