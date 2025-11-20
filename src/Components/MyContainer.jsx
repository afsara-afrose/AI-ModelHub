import React from 'react';

const MyContainer = ({className,children}) => {
    return (
        <div>
             <div className={`${className} container mx-auto`}>
            {children}
            
        </div>
            
        </div>
    );
};

export default MyContainer;