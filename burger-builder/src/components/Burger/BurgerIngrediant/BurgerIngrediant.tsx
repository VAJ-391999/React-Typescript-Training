import React, { ReactElement } from 'react';
import './BurgerIngrediant.css';
import PropTypes from 'prop-types';

const BurgerIngrediant = (props): ReactElement | null => {
    
    let ingrediant: null | JSX.Element = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingrediant = <div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingrediant = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case ('meat'):
            ingrediant = <div className="Meat"></div>
            break;
        case ('cheese'):
            ingrediant = <div className="Cheese"></div>
            break;
        case ('salad'):
            ingrediant = <div className="Salad"></div>
            break;
        case ('bacon'):
            ingrediant = <div className="Bacon"></div>
            break;
        default:
            ingrediant = null;
    }

    return ingrediant;
    
} 

BurgerIngrediant.propTypes = {
    type: PropTypes.string.isRequired
}; 

export default BurgerIngrediant;