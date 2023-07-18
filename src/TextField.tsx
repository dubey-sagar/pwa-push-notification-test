import React, { useState } from 'react';

type TextFieldProps = {
    placeholder: string;
    onChange: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({ placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    return <input type="text" placeholder={placeholder} value={value} onChange={handleChange} />;
};

export default TextField;
