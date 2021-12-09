import React from 'react';
import BarComponent from './BarComponent';

const DisplayBarsComponent = ( {list} ) => {
    return (
        <div className="bars-container">
            {list.map(number => (
                <BarComponent value={number.value} color={number.color} pointer={number.pointer} condition={number.condition} key={number.key}/>
            ))}
        </div>
    );
};

export default DisplayBarsComponent;
