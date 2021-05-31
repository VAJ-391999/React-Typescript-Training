import React, { ReactElement, FC } from 'react';
import './Order.css';

const order = (props): ReactElement => {

    const ingrediants: any[] = [];

    for (let ingrediantName in props.ingrediants) {
        ingrediants.push(
            {
                name: ingrediantName,
                amount: props.ingrediants[ingrediantName]
            });
    }

    const ingrediantsOutput = ingrediants.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });
    
    return (<div className="Order">
        <p>Ingrediants: {ingrediantsOutput} </p>
        <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>);
};

export default order;