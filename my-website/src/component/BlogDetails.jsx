import "../Static/Blog.css"
import servicehero from "../assets/service-hero.jpg"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import Bbottom from "../assets/Bbottom.jpg"
import Bcenterleft from "../assets/Bcenterleft.jpg"
import Bcenterright1 from "../assets/Bcenterright1.jpg"
import Bcenterright2 from "../assets/Bcenterright2.jpg"
import BTopleft from "../assets/BTopleft.jpg"


function BlogDetails() {
    return (
        <>
            <div className="blog">
                <div className="container-fuild">
                    {/* <div className="container"> */}
                    <div className="service-1">
                        <img src={servicehero} />
                        <div className="service-box-1" style={{ textAlign: "center" }}>
                            <h1 style={{ fontSize: "50px" }}>Blog</h1>
                            <p style={{ textAlign: "justify", width: "100%", marginTop: "20px" }}>I'm a paragraph. Click here to add your own text and edit me.
                                It’s easy. Just click “Edit Text” or double click me to add your
                                own content and make changes to the font. I’m a great place for
                                you to tell a story and let your users know a little more about you.</p>
                            <button style={{ marginTop: "20px", borderRadius: "25px" }}>View Salon Menu</button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div className="container-fluid my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <img src={blog1} alt="" style={{ height: "350px", width: "60%", borderRadius: "25px" }} />
                                <h1 style={{ fontSize: "50px", marginTop: "30px" }}>GET THE CLEANEST CUT HERE</h1>
                                <p style={{ width: "90%", textAlign: "justify", marginTop: "30px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                                <div className="blog-box-1 d-flex" style={{ width: "90%", backgroundColor: "#E8E8E8" }}>
                                    <div className="right-box me-2" style={{ height: "100px", width: "3%", backgroundColor: "#F7E7CE" }}></div>
                                    <p style={{ width: "95%", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                </div>
                                <p style={{ width: "90%", textAlign: "justify", marginTop: "30px" }}>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
                                <div className="row mt-5" style={{ width: "90%" }}>
                                    <div className="col-4">
                                        <img src={blog1} alt="" style={{ height: "150px" }} />
                                    </div>
                                    <div className="col-4">
                                        <img src={blog1} alt="" style={{ height: "150px" }} />
                                    </div>
                                    <div className="col-4">
                                        <img src={blog1} alt="" style={{ height: "150px" }} />
                                    </div>

                                </div>
                                <p style={{ width: "90%", textAlign: "justify", marginTop: "30px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                                <p style={{ width: "90%", textAlign: "justify", marginTop: "30px" }}>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
                                <p style={{ width: "90%", textAlign: "justify", marginTop: "30px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>

                                <div className="related-img mt-5">
                                    <div className="row" style={{ width: "90%" }}>
                                        <div className="col-4">
                                            <img src={blog1} alt="" style={{ height: "150px" }} />
                                        </div>
                                        <div className="col-4">
                                            <img src={blog1} alt="" style={{ height: "150px" }} />
                                        </div>
                                        <div className="col-4">
                                            <img src={blog1} alt="" style={{ height: "150px" }} />
                                        </div>

                                    </div>
                                </div>
                                <h1 style={{ marginTop: "50px" }}>Add a Comment</h1>
                                <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "20%" }} />
                                <p>Your email address will not be published. Required fields are marked *</p>

                                <div className="row my-3">
                                    <div className="col-5">
                                        <input type="text" placeholder="Your Name" className="form-control" id="exampleInputText" aria-describedby="textHelp" />
                                    </div>
                                    <div className="col-6">
                                        <input type="email" placeholder="Your Email Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-11">
                                        <textarea placeholder="Your Comment" className="form-control" id="exampleInputText" aria-describedby="textHelp" rows="15" />
                                    </div>
                                    <div className="col-11" style={{ textAlign: "end" }}>
                                        <button style={{ marginTop: "20px", borderRadius: "25px", backgroundColor: "#D4AF37", color: "white", padding: "5px", borderColor: "#D4AF37" }}>Send Comment</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <div className="categories">
                                    <h1 style={{ marginTop: "40px" }}>categories</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="categories-box my-5">
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Barber</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Barbershop</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Beard</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Cut & Style</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Shave</h5>
                                            <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                        </div>
                                        <hr />
                                        <div className="categories-list d-flex justify-content-between">
                                            <h5>Waxing</h5>
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
                                    <h1>Lastest News</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="newslist">
                                        <div className="news-box my-5">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>GET THE CLEANEST CUT HERE</h5>
                                                    <p style={{ marginTop: "20px" }}>Posted by admin</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={blog1} alt="" style={{ height: "100px", width: "150px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>HOW TO SHAVE YOUR BEARD RIGHT</h5>
                                                    <p style={{ marginTop: "20px" }}>Posted by admin</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={blog2} alt="" style={{ height: "100px", width: "150px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5>BEST HAIR CUTS FOR MEN</h5>
                                                    <p style={{ marginTop: "20px" }}>Posted by admin</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <img src={blog3} alt="" style={{ height: "100px", width: "150px" }} />
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-gallary my-5">
                                    <h1>Gallary</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="gallarylist">
                                        <div className="row">
                                            <div className="col-7">
                                                <img src={BTopleft} alt="" style={{ height: "150px", width: "250px" }} />
                                            </div>
                                            <div className="col-5" style={{ textAlign: "end" }}>
                                                <img src={blog1} alt="" style={{ height: "150px", width: "160px" }} />
                                            </div>
                                        </div>
                                        <div className="row mt-2 d-flex justify-content-between">
                                            <div className="col-5">
                                                <img src={Bcenterleft} alt="" style={{ height: "300px", width: "190px" }} />
                                            </div>
                                            <div className="col-7">
                                                <div className="row" style={{ textAlign: "end" }}>
                                                    <div className="col-12">
                                                        <img src={Bcenterright1} alt="" style={{ height: "150px", width: "220px" }} />
                                                    </div>
                                                    <div className="col-12">
                                                        <img src={Bcenterright2} alt="" style={{ height: "150px", width: "220px" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12">
                                                <img src={Bbottom} alt="" style={{ height: "200px", width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="archive my-5">
                                    <h1>Archives</h1>
                                    <hr className="categories-hr my-3" style={{ backgroundColor: "#CF9311", height: "3px", width: "23%" }} />
                                    <div className="archivelist">
                                        <div className="archive-box my-5">
                                            <div className="categories-list d-flex justify-content-between">
                                                <h5>June 2016</h5>
                                                <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                            </div>
                                            <hr />
                                            <div className="categories-list d-flex justify-content-between">
                                                <h5>June 2018</h5>
                                                <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
                                            </div>
                                            <hr />
                                            <div className="categories-list d-flex justify-content-between">
                                                <h5>June 2022</h5>
                                                <i className="bi bi-arrow-right-short fs-3 fw-1"></i>
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

export default BlogDetails