import React, { useEffect, useState } from 'react';
import { getCart } from '../server';
import { useUser } from '@clerk/clerk-react';


function Cart() {
    const [num, setNum] = useState(1)
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { isLoaded, user } = useUser();
    const [quantities, setQuantities] = useState({});
    const [currUserEmail, setCurrUserEmail] = useState("")
    useEffect(() => {
        async function fetchData() {
            if (!isLoaded || !user) return;

            const response = await getCart();
            setCartList(response);

            const email = user.primaryEmailAddress.emailAddress;
            setCurrUserEmail(email)

            // Set default quantities
            const initialQuantities = {};
            response.forEach(item => {
                if (item.email === email) {
                    initialQuantities[item.id] = 1;
                }
            });
            setQuantities(initialQuantities);

            // Initial total with default quantity = 1

        }

        fetchData();
    }, [isLoaded, user]);

    useEffect(() => {
        if (!user || !cartList.length) return;

        const currUserEmail = user.primaryEmailAddress.emailAddress;
        let total = 0;

        cartList.forEach(item => {
            if (item.email === currUserEmail) {
                const qty = quantities[item.id] || 1;
                total += item.price * qty;
            }
        });

        setTotalPrice(total);
    }, [quantities, cartList, user]);

    // console.log(totalPrice)


    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    // const currUserEmail = user.primaryEmailAddress.emailAddress;

    return (
        <div>
            {/* {cartList.map((ele) => (
                <div key={ele.id}>
                    {ele.email === currUserEmail && (
                        <>
                            <img src={ele.img} alt="" />
                            <h1>{ele.price}</h1>
                            <h1>{ele.name}</h1>
                        </>
                    )}
                </div>
            ))} */}

            <div className="container mt-5 pt-5">
                <h1>Shopping Product</h1>
                <h4 className='mt-3'>2 items in your cart</h4>
                <div className="container border rounded">
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6"><h5>Product</h5></div>
                                <div className="col-6"><h5>Product Name</h5></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2"><h5>Price</h5></div>
                                <div className="col-4"><h5>Quantity</h5></div>
                                <div className="col-4"><h5>Total Price</h5></div>
                                <div className="col-2"><h5>Remove</h5></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {cartList.map((ele) => (
                        <div key={ele.id}>
                            {ele.email === currUserEmail && (
                                <>
                                    <div className="row mt-5">
                                        <div className="col-6 Product-cart">
                                            <div className="row">
                                                <div className="col-6">
                                                    <img src={ele.img} alt="" style={{ height: "200px", width: "200px" }} />
                                                </div>
                                                <div className="col-6">
                                                    <h3 style={{ justifyItems: "center" }}>{ele.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-2">
                                                    <h3>{ele.price}</h3>
                                                </div>
                                                <div className="col-4">
                                                    <div
                                                        className="btn-group my-3"
                                                        role="group"
                                                        aria-label="Basic mixed styles example"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning rounded-0"
                                                            onClick={() =>
                                                                setQuantities((prev) => ({
                                                                    ...prev,
                                                                    [ele.id]: Math.max((prev[ele.id] || 1) - 1, 0),
                                                                }))
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="btn btn-secondary"
                                                            value={quantities[ele.id] || 1}
                                                            style={{ width: "80px" }}
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning rounded-0"
                                                            onClick={() =>
                                                                setQuantities((prev) => ({
                                                                    ...prev,
                                                                    [ele.id]: (prev[ele.id] || 1) + 1,
                                                                }))
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h3>Total: {ele.price * (quantities[ele.id] || 1)}</h3>
                                                </div>
                                                <div className="col-2">
                                                    <i className="bi bi-trash3-fill text-danger"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 mt-4 border rounded" style={{ width: "49%" , backgroundColor:"#D4AF37" }}>
                        <h2>Cart Products</h2>
                        <div className="totalamt d-flex justify-content-between mt-4">
                            <h3>Total:</h3>
                            <h3>{totalPrice}</h3>
                        </div>
                        {/* <h3>Total: {totalPrice}</h3> */}
                        <hr />
                        <div className='paybtn text-end mb-3 d-flex justify-content-between'>
                            <a href="/shop"><button  style={{backgroundColor:"black", color:"white"}}>Back</button></a>
                            <a href="/personaldetails"><button  style={{backgroundColor:"black", color:"white"}}>Pay Process</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
