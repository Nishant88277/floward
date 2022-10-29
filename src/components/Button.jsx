import React from 'react';

function Button({className, placeholder, onClick}) {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {placeholder}
        </button>
    );
}

export default Button;