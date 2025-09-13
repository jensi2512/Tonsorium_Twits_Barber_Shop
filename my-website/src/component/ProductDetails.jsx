import React, { useState } from 'react'
import productlist from '../assets/productList.png'
import '../Static/ProductDetails.css'
import relatedproject from '../assets/RelatedProject1.png'
import relatedproject2 from '../assets/RelatedProject2.png'
import relatedproject4 from '../assets/RelatedProject4.png'
function ProductDetails() {
    const [num, setNum] = useState(0)
    return (
        <div>
            <div className="ProductDetails">
                <div className="container-fluid product-1 mt-5 px-5" style={{ backgroundColor: "#333333" }}>
                    <div className="product-1 py-5 text-center text-light mt-5">
                        <h1>Product</h1>
                    </div>
                </div>
                <div class="container my-5">
                    <div class="row">
                        <div class="col-5 product-img text-center">
                            <img src={productlist} alt="" />
                        </div>
                        <div class="col-7 py-4 px-4">
                            <h2>Classic Straight Razor</h2>
                            <h2 class="text-warning my-3">$35.00</h2>
                            <p>
                                Aliquam quis turpis laoreet, posuere tellus ut, semper quam. Sed
                                tincidunt turpis id velit ullamcorper cursus. Nunc volutpat justo
                                neque, nec ornare nisi pretium ac. Donec ac mauris pellentesque,
                                viverra felis eget, bibendum velit. Vivamus vitae efficitur tortor.
                            </p>
                            <div
                                class="btn-group my-3"
                                role="group"
                                aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-warning rounded-0 px-3 py-2" onClick={() => setNum(() => num <= 0 ? 0 : num - 1)}>
                                    -
                                </button>
                                <input type="number" class="btn btn-secondary px-3 py-2" value={num} />
                                <button type="button" class="btn btn-warning rounded-0 px-3 py-2" onClick={() => setNum(num + 1)}>
                                    +
                                </button>
                            </div>
                            <p class="mt-3 mb-0">
                                <i class="bi bi-folder-fill text-warning"></i> Category: Straight
                                Razor
                            </p>
                            <p class="p-0 mt-2">
                                <i class="bi bi-tag-fill text-warning"></i>
                                Tags: Razor, Shave, Straight
                            </p>

                            <a href="">
                                <button type="button" class="btn pricebtn1 btn-dark text-light rounded-5 px-4 my-3">
                                    Add to Cart
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="container my-5">
                    <div class="row detailpart">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="Description" aria-selected="true">Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="Review" aria-selected="false">Review</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="Description-tab" style={{ textAlign: "justify" }}>
                                <p>Aliquam quis turpis laoreet, posuere tellus ut, semper quam. Sed tincidunt turpis id velit ullamcorper cursus. Nunc volutpat justo neque, nec ornare nisi pretium ac. Donec ac mauris pellentesque, viverra felis eget, bibendum velit. Vivamus vitae efficitur tortor. Etiam eu lectus pharetra libero rhoncus facilisis. Vivamus rhoncus massa sapien, at sagittis nunc tincidunt vitae. Donec et pellentesque risus. Proin nisl nisi, facilisis non nisl placerat, iaculis suscipit lacus. Praesent varius, massa vitae volutpat finibus, arcu lorem tincidunt velit, ac accumsan purus magna eu nisl. Etiam tempus at felis nec feugiat. Aliquam vel magna ante. Duis nec tortor magna. In et elit sed arcu rhoncus hendrerit ac nec lacus. Aenean ut faucibus elit. Pellentesque id ante et orci posuere ultrices vel non erat.</p>
                                <p>Cras sollicitudin quam eu tempor feugiat. Phasellus tincidunt ornare leo, quis efficitur orci ultricies vel. Nullam lobortis non nunc a consectetur. Vivamus ultricies, felis nec maximus dictum, diam justo facilisis libero, at feugiat metus libero ac velit. Aliquam mollis augue sed porttitor dapibus. Nulla hendrerit erat sit amet eros malesuada elementum. Fusce nec nulla suscipit, tincidunt lorem in, placerat arcu. Suspendisse tempor sit amet odio at lobortis. Ut consectetur orci ligula, et rutrum augue mollis non. Sed sagittis arcu arcu. Duis consequat vitae ante et cursus. Aliquam scelerisque lacus ut tellus placerat, quis dictum magna consectetur. Nam imperdiet tempus nibh quis laoreet.</p>
                                <p>Aliquam quis turpis laoreet, posuere tellus ut, semper quam. Sed tincidunt turpis id velit ullamcorper cursus. Nunc volutpat justo neque, nec ornare nisi pretium ac. Donec ac mauris pellentesque, viverra felis eget, bibendum velit. Vivamus vitae efficitur tortor. Etiam eu lectus pharetra libero rhoncus facilisis. Vivamus rhoncus massa sapien, at sagittis nunc tincidunt vitae. Donec et pellentesque risus. Proin nisl nisi, facilisis non nisl placerat, iaculis suscipit lacus. Praesent varius, massa vitae volutpat finibus, arcu lorem tincidunt velit, ac accumsan purus magna eu nisl. Etiam tempus at felis nec feugiat. Aliquam vel magna ante. Duis nec tortor magna. In et elit sed arcu rhoncus hendrerit ac nec lacus. Aenean ut faucibus elit. Pellentesque id ante et orci posuere ultrices vel non erat.</p>
                            </div>
                            <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="Review-tab">
                                <p>There are no reviews yet.</p>
                                <p>Be the first to review “ABSORPTIVE BRUSH”</p>
                                <p>Your email address will not be published. Required fields are marked *</p>

                                <div className="review-icon">
                                    <p>Your rating *</p>
                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                    <i class="bi bi-star-fill text-warning me-2"></i>
                                </div>

                                <div className="form">
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput" class="form-label">Review</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Review" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ID" />
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                            Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                    </div>
                                   <div className="mt-3">
                                   <button class="btn btn-primary" type="submit">Submit</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row d-flex justify-content-between text-center">
                        <h2>Related products</h2>
                        <div class="col-4 product-shop">
                            <img class="product-shop-img bg-secondary" src={relatedproject} alt="" />
                            <h5 class="my-3">Shave Cream Cup</h5>
                            <h5>$25.00</h5>
                            <div className="addcardbtn d-flex justify-content-center">
                                <button type="button" class="btn pricebtn1 btn-dark text-light rounded-5 px-4 my-3">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div class="col-4 product-shop">
                            <img class="product-shop-img bg-secondary" src={relatedproject2} alt="" />
                            <h5 class="my-3">Shave Cream Cup</h5>
                            <h5>$25.00</h5>
                            <div className="addcardbtn d-flex justify-content-center">
                                <button type="button" class="btn pricebtn1 btn-dark text-light rounded-5 px-4 my-3">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div class="col-4 product-shop ">
                            <img class="product-shop-img bg-secondary" src={relatedproject4} alt="" />
                            <h5 class="my-3">Shave Cream Cup</h5>
                            <h5>$25.00</h5>
                            <div className="addcardbtn d-flex justify-content-center">
                                <button type="button" class="btn pricebtn1 btn-dark text-light rounded-5 px-4 my-3">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
