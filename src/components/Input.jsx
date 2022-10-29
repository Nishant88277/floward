import React from 'react';

function Input({type, placeholder, onChange, name, onBlur}) {
    return (
        <div>
            <label className="block">{placeholder}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
        </div>
    );
}

export default Input;