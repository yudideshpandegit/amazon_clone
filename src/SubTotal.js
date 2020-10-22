import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';

function SubTotal({totalPrice}) {
    return (
        <div className = 'subtotal'>

            <CurrencyFormat
                renderText = {(value) =>(
                    <div className = 'subtotal__content'>
                        <p>Subtotal (0 items): <span className = 'subtotal__total'>₹{totalPrice}</span> </p>
                        <small>
                            <input type = 'checkbox' /><span className = 'subtotal__checkbox'>This order contains a gift</span>
                        </small>

                        <button className = 'subtotal__checkout' type = "button">Checkout</button>

                    </div>
                )}
                value = {80}
                displayType = {"text"}
                thousandSeperator = {true}
                prefix = {"₹"}
            />
        </div>
    )
};


export default SubTotal
