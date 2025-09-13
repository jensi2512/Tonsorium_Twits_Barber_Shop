import React from 'react'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import product8 from '../assets/product8.jpg'
import product9 from '../assets/product9.jpg'
import product10 from '../assets/product10.jpg'
import product11 from '../assets/product11.jpg'
import product12 from '../assets/product12.jpg'
import productlist from '../assets/productList.png'
import productlist2 from '../assets/RelatedProject2.png'
import "../Static/Shop.css"
import { useUser } from '@clerk/clerk-react'
import { postCart } from '../server'
function shop() {

    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded) {
        return <>Lodding...</>
    }

    async function handleCart(img, price, name) {
        console.log(img, price, name)
        if (!isSignedIn) {
            alert("Please Signin")
            return
        }

        await postCart({ img, price, name, email: user.primaryEmailAddress.emailAddress })
    }

    return (
        <>
            <div className="Shop">
                <div className="container-fuild px-5" style={{ backgroundColor: "#333333" }}>
                    <div className="about-1">
                        <h1>Shop</h1>
                        <button>View Salon Menu</button>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="product">
                        <div className="row">
                            <div className="col-8">
                                <div className="view d-flex justify-content-between">
                                    <p>Default sorting</p>
                                    <a href="/cart"><button>View Cart</button></a>
                                </div>
                                <div className="productList d-flex justify-content-between mt-5">
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product1} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product1, 85, "Moisturizers")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product2} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product2, 55, "Cream")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product3} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product3, 15, "product3")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="productList d-flex justify-content-between mt-5">
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product4} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product4, 25, "Product4")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product5} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product5, 85, "Product5")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product6} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product6, 85, "product6")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="productList d-flex justify-content-between mt-5">
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product7} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product7, 85, "product7")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product8} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product8, 85, "Moisturizers8")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product9} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary" onClick={() => handleCart(product9, 85, "Moisturizers9")}>ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="productList d-flex justify-content-between mt-5">
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product10} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary">ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product11} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary">ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={product12} className="card-img-top-product" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Moisturizers</h5>
                                                <div className="card-icons">
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                                </div>
                                                <p style={{ fontSize: "20px" }}>$85</p>
                                                <a href="#" className="btn btn-primary">ADD TO CARD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-4">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <div className="categories">
                                    <h1 style={{ marginTop: "40px", fontSize: "30px" }}>Product Categories</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="categories-box my-5">
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Cream Cup</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Hair Brush</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Hair Comb</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Oil Bottle</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Hair Scissor</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Shaving Brush</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Uncategories</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="latestnews my-5">
                                    <h1 style={{ marginTop: "50px", fontSize: "30px" }}>Product</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="newslist">
                                        <div className="news-box my-5">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>Classic Shaving Brush</h5>
                                                    <p style={{ marginTop: "20px" }}>$25.00</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={product10} alt="" style={{ height: "80px", width: "80px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>Classic Straight Razor</h5>
                                                    <p style={{ marginTop: "20px" }}>$27.00</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={productlist} alt="" style={{ height: "80px", width: "80px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>Wooden Hair Brush</h5>
                                                    <p style={{ marginTop: "20px" }}>$19.00</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={product8} alt="" style={{ height: "80px", width: "80px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>Double Edge Razor</h5>
                                                    <p style={{ marginTop: "20px" }}>$19.00</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={productlist2} alt="" style={{ height: "80px", width: "80px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default shop
