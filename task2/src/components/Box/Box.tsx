import React, { useState } from 'react';

import './Box.css';

import { cnJumper } from './Box.classname';


export const Box = () => {
    const [box, setBox] = useState(cnJumper('Box', { color: 'blue' }));
    const [jumper, setJumper] = useState(cnJumper({ position: 'start'}));

    const handleCLick = () => {
        if (box === 'Jumper-Box Jumper-Box_color_blue') {
            setBox(cnJumper('Box', { color: 'red' }));
            setJumper(cnJumper({ position: 'end' }));
        } else {
            setBox(cnJumper('Box', { color: 'blue' }));
            setJumper(cnJumper({ position: 'start' }));
        }
    };

    return (
        <div className={cnJumper()}>
            <div className={jumper}></div>
            <div 
                className={box}
                onClick={handleCLick}
            />
        </div>        
    );
}

// 2 решение. Какое лучше? В первом примере я храню классы в стейте, а во втором постарался избежать это, но появились тернарники

// import React, { useState } from 'react';

// import './Box.css';

// import { cnJumper } from './Box.classname';


// export const Box = () => {
//     const [position, setPosition] = useState<'start' | 'end'>('start');

//     const handleCLick = () => {
//         setPosition(position === 'start' ? 'end' : 'start');
//     };

//     return (
//         <div className={cnJumper({ position })}>
//             <div 
//                 className={cnJumper('Box', { color: position === 'start' ? 'blue' : 'red'})}
//                 onClick={handleCLick}
//             />
//         </div>        
//     );
// }

