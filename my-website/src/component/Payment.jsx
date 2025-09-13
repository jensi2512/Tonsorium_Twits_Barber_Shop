import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Static/Payment.css"
function Payment() {
    const navigate = useNavigate();
    return (
        <>
            <div className="main text-dark px-5">
                <div className="product-1 py-5 text-center text-dark mt-5">
                    <h1>Payment</h1>
                </div>
                <div className="container-fluid">
                    {/* <div className="container-fluid product-1 mt-5 px-5" style={{ backgroundColor: "#333333" }}>
                    </div> */}
                    <div className="row">
                        <div className="col-4 p-2 bg-dark">
                            <div className="paymentlogo d-flex">
                                <div className="box bg-dark">
                                    <img src="" alt="" />
                                </div>
                                <p>Tonsorium Twits</p>
                            </div>
                            <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button bg-dark text-light fs-4"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            Payable Now
                                        </button>
                                    </h3>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse bg-dark text-light"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body d-flex justify-content-between ">
                                            <p>Sub Total</p>
                                            <p> ......</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 paymentright">
                            <div className="back d-flex px-1">
                                <i className="bi bi-chevron-left fs-6 py-2 text-light"></i>
                                <p className="payment-text py-2">
                                    {" "}
                                    <Link
                                        className="payment-text-back ms-2 text-light"
                                        to="/cart">
                                        Back{" "}
                                    </Link>
                                </p>
                            </div>
                            <p className="payment-title text-light text-uppercase p-2">
                                Cards (Debit / Credit)
                            </p>
                            <div className="payment-box bg-dark px-5 py-3 mb-5 mx-2">
                                <form action="">
                                    <div className="col-12 card-no my-3">
                                        <label for="inputText" className="form-label">
                                            Card No.
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control p-3 rounded-0"
                                            id="inputTel"
                                            placeholder="Enter Card Number"
                                        />
                                        <div className="payment-icon">
                                            {" "}
                                            <i className="bi bi-credit-card-fill fs-4"></i>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 my-3">
                                            <label for="inputEmail4" className="form-label">
                                                Expiry
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control p-3 rounded-0"
                                                placeholder="MM/YY"
                                                aria-label="text"
                                            />
                                        </div>
                                        <div className="col-6 my-3">
                                            <label for="inputEmail4" className="form-label">
                                                CVV <i className="bi bi-question-circle ms-1"></i>
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control p-3 rounded-0"
                                                placeholder="Enter CVV"
                                                aria-label="tel"
                                            />
                                        </div>
                                        <div className="col-12 my-3">
                                            <label for="inputText" className="form-label">
                                                Name on card
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control p-3 rounded-0"
                                                id="inputTel"
                                                placeholder="Enter name as on card"
                                            />
                                        </div>
                                        <div className="col-12 mb-4 mt-2">
                                            <button
                                                type="button"
                                                className="btn payment-btn py-3 rounded-0 btn-lg"
                                                onClick={() => navigate("/paymentSuccessful")}>
                                                Processed
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;