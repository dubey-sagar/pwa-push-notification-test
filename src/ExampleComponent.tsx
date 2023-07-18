import React from 'react';

const ExampleComponent: React.FC = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Example Component</h1>
            <p data-testid="count">Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default ExampleComponent;
