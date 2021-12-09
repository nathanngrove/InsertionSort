import React from 'react';

const BarComponent = ( { value, color, pointer, condition } ) => {

    const renderThis = () => {
        if(pointer === false && condition === true)
            return (
                <div className="bar-component condition-bar" style={{width: `${value}%`, backgroundColor: `${color}`}}>
                    {value}
                </div>
            );
        else if(pointer === true && condition === false)
            return (
                <div className="bar-component pointer-bar" style={{width: `${value}%`, backgroundColor: `${color}`}}>
                    {value}
                </div>
            );
        else 
            return (
                <div className="bar-component" style={{width: `${value}%`, backgroundColor: `${color}`}}>
                    {value}
                </div>
            );
    }

    return renderThis();
    
};

export default BarComponent;
