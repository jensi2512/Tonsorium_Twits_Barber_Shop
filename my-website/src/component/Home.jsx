import "../Static/Home.css"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import homepage from "../assets/homepage.png"
import IcFacial from "../assets/IcFacials.png"
import ichair from "../assets/ichair.png"
import IcMakeup from "../assets/IcMakeup.png"
import IcWaxing from "../assets/IcWaxing.png"
import look from "../assets/look.png"
import homenews1 from "../assets/homenews1.png"
import homenews2 from "../assets/homenews2.png"
import homenews3 from "../assets/homenews3.png"
import footer1 from "../assets/footer1.png"
import look1 from "../assets/BTopleft.jpg"
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Home() {
    const Navigate = useNavigate()
    return (
        <>

            <div className="main">
                {/* ------section-1 start------------- */}
                <div className="container-fuild">
                    <div className="section-1">
                        <img src={homepage} />
                        <div className="img-box1">
                            <h1>Enhace <br /> Your <br /> Natural <br />Beauty
                            </h1>
                            <p>Fill your self more beautiful</p>
                            <a href="/service"><button className="herobtn">View Salon Menu</button></a>

                        </div>
                    </div>
                </div>
                {/* ------section-1 end------------- */}

                {/* ------section-2 (Luxury Salon) start------------- */}
                <div className="container mt-5">
                    <div className="section-2">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-4">
                                <div className="left-1">
                                    <p>Fill your self more beautiful</p>
                                    <h1>Luxury salon <br /> where you will <br /> feel unique</h1>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-box2">
                                    <img src={look1} alt="" width={"100%"} />
                                    <p>Sagittis congue augue egestas integer velna purus purus magna libero suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque and fusce cursus neque blandit fusce aliquam nulla lacinia Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptatibus magni architecto consequatur! Doloremque vitae ipsa esse veritatis architecto?</p>
                                    <button className="herobtn2">Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-2 end------------- */}

                {/* ------section-3 (your Secret beauty) start------------- */}
                <div className="container-fluid" style={{ backgroundColor: "black" }}>
                    <div className="container">
                        <div className="section-3 mt-5">
                            <div className="top">
                                <p>Indulge Yourself</p>
                                <h1>Your Secret Place of Beauty</h1>
                                <p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas magna <br />aliquam ipsum vitae purus justo lacus ligula and ipsum lacinia primis cubilia</p>
                            </div>
                            <div className="bottom mt-5">
                                <div className="box-3 ">
                                    <div className="left col-6 d-flex mt-3">
                                        <img src={IcFacial} alt="" />
                                        <div className="box1 ms-5">
                                            <h6>Facial</h6>
                                            <p>Sagittis congue augue egestas  integer diam purus magna and egestas magna suscipit</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: "white" }} />
                                    <div className="left col-6 d-flex mt-3 ">
                                        <img src={IcMakeup} alt="" />
                                        <div className="box1 ms-5">
                                            <h6>Make-Up</h6>
                                            <p>Sagittis congue augue egestas  integer diam purus magna and  egestas magna suscipit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-3 border-start">
                                    <div className="left col-6 d-flex mt-3 ms-5">
                                        <img src={ichair} alt="" />
                                        <div className="box1 ms-5">
                                            <h6>Hair</h6>
                                            <p>Sagittis congue augue egestas  integer diam purus magna and  egestas magna suscipit egestas</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: "white" }} />
                                    <div className="left col-6 d-flex mt-3 ms-5">
                                        <img src={IcWaxing} alt="" />
                                        <div className="box1 ms-5">
                                            <h6>Waxing</h6>
                                            <p>Sagittis congue augue egestas  integer diam purus magna and  egestas magna suscipit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-3 end------------- */}

                {/* ------section-4 (Look More) start------------- */}
                <div className="container">
                    <div className="section-4 mt-5">
                        <div className="top-1">
                            <div className="row">
                                <div className="left-2 col-6">
                                    <p>naturally You</p>
                                    <h1>Look more <br />natural with <br /> Reine studio</h1>
                                </div>
                                <div className="col-6">
                                    <img src={look} alt="" width={"100%"} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-1">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Certified Stylists
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            100% Organic Cosmetics
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Easy Online Booking
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-4 end------------- */}

                {/* ------section-5 (Time Schedule) start------------- */}
                <div className="container">
                    <div className="section-5 mt-5">
                        <div className="row">
                            <div className="col-8">
                                <p>Time Schedule</p>
                                <h1>Working Hours</h1>
                                <p>Nemo ipsam egestas volute turpis varius ipsum egestas purus diam ligula sapien ultrice sapien tempor aliquam tortor ipsum and augue turpis quaerat aliquet congue and molestie magna in congue undo aliquet congue ultrices quaerat purus justo</p>
                                <img src={footer1} alt="" style={{ height: "300px" }} />
                            </div>
                            {/* <div className="col-2"></div> */}
                            <div className="col-4">
                                <div className="box-5">
                                    <h3>Mon – Wed</h3>
                                    <span>10:00 AM - 9:00 PM</span>
                                    <hr />
                                    <h3>Thursday</h3>
                                    <span>10:00 AM - 7:30 PM</span>
                                    <hr />
                                    <h3>Friday</h3>
                                    <span>10:00 AM - 9:00 PM</span>
                                    <hr />
                                    <h3>Sat – Sun</h3>
                                    <span>10:00 AM - 9:00 PM</span>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-5 end------------- */}

                {/* ------section-6 (Menu) start------------- */}
                <div className="container">
                    <div className="section-6 mt-5">
                        <div className="top-6">
                            <p>Focus On Beuty</p>
                            <h1>Our Service Menu</h1>
                        </div>

                        <div className="row mt-5">
                            <div className="col-6">
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Herbal Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$30</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Deep Cleaning Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$130</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Organic Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$185</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Four Layer Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$140</h4></div>
                                </div>
                                <hr />
                            </div>
                            <div className="col-6">
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Biolight Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$165</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Oxygen Blast Facial</h3>
                                        <p>Service length 1 hours</p>
                                    </div>
                                    <div className="price"><h4>$265</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Eyebrow Tinting</h3>
                                        <p>Service length 40 Minutes</p>
                                    </div>
                                    <div className="price"><h4>$25</h4></div>
                                </div>
                                <hr />
                                <div className="box-6">
                                    <div className="title">
                                        <h3>Eyelash Tinting</h3>
                                        <p>Service length 2 hours</p>
                                    </div>
                                    <div className="price"><h4>$25</h4></div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="top-6 mt-3">
                            <a href="/service"><button className="homeservicebtn">View All Price</button></a>
                        </div>
                    </div>
                </div>
                {/* ------section-6 end------------- */}

                {/* ------section-7 (form) start------------- */}
                <div className="container-fluid mt-5" style={{ background: "#F7E7CE" }}>
                    <div className="container">
                        <div className="section-7">
                            <div className="row">
                                <div className="left-7 col-6">
                                    <p>Come, Relax And Enjoy</p>
                                    <h1>Place Where <br /> You Will Feel <br />Peaceful</h1>
                                    <img src="https://www.gettimely.com/media/tuih5q5n/timely-blog-1-the-natural-look-8-salon-ideas.jpg" alt="" style={{ height: "450px" }} />
                                </div>
                                {/* <div className="col-2"></div> */}
                                <div className="col-6">
                                    <div className="form-1">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" placeholder="First Name*" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" placeholder="Last Name*" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" placeholder="Email Address*" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="number" placeholder="Phone Number*" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="date" placeholder="Appointment Date*" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select Service</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                            <br />
                                            <button type="submit" className="btn btn-dark">View All Price </button>
                                        </form>
                                        <br />
                                        <br />
                                        <p>Sagittis congue augue egestas integer velna purus purus magna blandit suscipit egestas magna diam ipsum aliquam vitae purus justo lacus ligula ipsum congue tempor undo quisque fusce cursus neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa sapiente repellat natus unde molestiae iure dolorem fugiat, molestias perspiciatis rem dolor rerum hic eum blanditiis nostrum, incidunt odit eaque!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-7 end------------- */}

                {/* ------section-8 (Gallery) start------------- */}
                <div className="container-fluid mt-5">
                    <div className="container my-5">
                        <div className="section-8">
                            <div className="text-center mb-5">
                                <h6 className="subtitle">Be A More Perfect</h6>
                                <h1 className="main-title">Redefine Your Beauty</h1>
                            </div>

                            <div className="gallery-container">
                                <div className="gallery-grid">
                                    <div className="gallery-item small-left">
                                        <img src={image1} alt="Hair Washing Service" className="img-fluid rounded" />
                                    </div>
                                    <div className="gallery-item large-center">
                                        <img src={image2} alt="Professional Hair Treatment" className="img-fluid rounded" />
                                    </div>
                                    <div className="gallery-item medium-right-top">
                                        <img src={image3} alt="Facial Treatment" className="img-fluid rounded" />
                                    </div>
                                    <div className="gallery-item small-right-top">
                                        <img src={image5} alt="Head Massage" className="img-fluid rounded" />
                                    </div>
                                    <div className="gallery-item medium-bottom">
                                        <img src={image4} alt="Hair Coloring" className="img-fluid rounded" />
                                    </div>
                                    <div className="gallery-item small-right-bottom">
                                        <img src={image6} alt="Beard Treatment" className="img-fluid rounded" />
                                    </div>
                                </div>
                            </div>

                            <div className="btn8 text-center">
                                <button className="btn-8 btn-dark px-4 py-2" onClick={()=> Navigate("/gallery")}>View All Gallery</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-8 end------------- */}

                {/* ------section-9 (comments) start------------- */}
                <div className="container-fluid" style={{ background: "#F7E7CE" }}>
                    <div className="container">
                        <div className="section-9">
                            <p>Testimonials</p>
                            <h1>Comments & Reviews</h1>
                            <div className="box-9">

                                <img src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" alt="" style={{ height: "150px", borderRadius: "200px" }} />
                                <p>Sagittis congue augue egestas integer velna purus purus magna blandit suscipit egestas magna diam ipsum aliquam vitae purus justo lacus ligula ipsum congue tempor undo quisque fusce cursus neque</p>
                                <h3>poppy smit</h3>
                                <p>Freelance</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-9 end------------- */}

                {/* ------section-10 (news) start------------- */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="section-10">
                            <p>From The Blog</p>
                            <h1>Our Latets News</h1>
                            <div className="box-group-10">
                                <div className="card mt-4" style={{ width: "25rem" }}>
                                    <img src={homenews1} alt="" style={{ height: "100%", width: "100%" }} />
                                    <div className="card-body">
                                        <p>NEWS | December 09, 2024</p>
                                        <p>Quaerat sodales sapien and tempor diam euismod purus</p>
                                        <p>Velna purus purus magna ipsum suscipit egestas magna aliquam ipsum vitae...</p>
                                    </div>
                                </div>
                                <div className="card mt-4" style={{ width: "25rem" }}>
                                    <img src={homenews2} alt="" style={{ height: "100%", width: "100%" }} />
                                    <div className="card-body">
                                        <p>NEWS | December 05, 2025</p>
                                        <p>Magna aliquam ipsum a vitae purus justo lacus ligula</p>
                                        <p>Velna purus purus magna ipsum suscipit egestas magna aliquam ipsum vitae...</p>
                                    </div>
                                </div>
                                <div className="card mt-4" style={{ width: "25rem" }}>
                                    <img src={homenews3} alt="" style={{ height: "100%", width: "100%" }} />
                                    <div className="card-body">
                                        <p>NEWS | December 04, 2025</p>
                                        <p>Quaerat sodales sapien and tempor diam euismod purus</p>
                                        <p>Velna purus purus magna ipsum suscipit egestas magna aliquam ipsum vitae...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------section-10 end------------- */}
            </div>
        </>
    )
}

export default Home 