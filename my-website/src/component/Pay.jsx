import React, { useState } from "react";
import Paypal from "./Paypal";

export default function Pay () {
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="pay">
            {checkout ? (
                <Paypal />
            ) : (
                <button className="btn text-center"
                onClick={() => {
                    setCheckout(true);
                }}
                // style={{backgroundColor : "#D4AF37" , color : "white"}}
                >Make Payment</button>
            )}
        </div>
    );
}