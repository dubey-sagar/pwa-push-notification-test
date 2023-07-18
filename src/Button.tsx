import React, { useState } from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        onClick();
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    return (
        <button onClick={handleClick}>
            {label} (Clicked: {clickCount} times)
        </button>
    );
};

export default Button;
