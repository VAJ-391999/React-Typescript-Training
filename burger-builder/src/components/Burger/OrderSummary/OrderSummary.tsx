import React, {MouseEventHandler, FC, ReactElement} from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

type Props = {
  ingrediants: [],
  price: number,
  purchaseCancelled: MouseEventHandler,
  purchaseContinued: MouseEventHandler
}

const OrderSummary: FC<Props> = ({ingrediants, price, purchaseCancelled, purchaseContinued}: Props): ReactElement => {
    
    const ingredientSummary = Object.keys(ingrediants)
        .map(igKey => {
          return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>
              {igKey}
            </span>:{ingrediants[igKey]}
          </li>
        );
      });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: £{price}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
      </Aux>

    );
  }

export default OrderSummary;