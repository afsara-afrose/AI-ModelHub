
import React from 'react';

const MyContainer = ({children,className}) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default MyContainer;
