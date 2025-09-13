import "../Static/Service.css"
import servicehero from "../assets/service-hero.jpg"
import service2 from "../assets/service2.avif"
function Service() {
    return (
        <>
            <div className="service">
                {/* --------------section-1 start------------- */}
                <div className="container-fluidd">
                    {/* <div className="container"> */}
                    <div className="service-1">
                        <img src={servicehero} />
                        <div className="service-box-1" style={{ textAlign: "center" }}>
                            <h1 style={{ fontSize: "50px" }}>Service</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me.
                                It’s easy. Just click “Edit Text” or double click me to add your
                                own content and make changes to the font. I’m a great place for
                                you to tell a story and let your users know a little more about you.</p>
                            <button style={{ marginTop: "20px", color : "black"}}>View Salon Menu</button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* --------------section-1 end------------- */}

                {/* --------------section-2(hair cut) start------------- */}
                <div className="container-fluid my-5 ">
                    <div className="container">
                        <div className="service-2">
                            <div className="row p-5">
                                <div className="col-6">
                                    {/* <img src={blog2} alt="" style={{height : "600px"}}/> */}
                                </div>
                                <img className="img2 p-0" src={service2} alt=""/>
                                <div className="col-6" style={{ width: "45%" }}>
                                    <h1>Hair Cut</h1>
                                    <p>At the heart of the classic haircut is the all-scissors approach, a technique that embraces precision and craftsmanship. This method involves using shears to carefully shape and trim the hair, resulting in a refined and polished look.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------section-2(hair cut) end------------- */}

                {/* --------------section-3 (packages) start------------- */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="service-3" style={{ marginTop: "180px" }}>
                            <h1 style={{ fontSize: "50px", textAlign: "center" }}>Packages</h1>
                            <div className="packages-box d-flex justify-content-between text-center mt-5">
                                <div className="card text-dark bg-light mb-3" style={{ width: "25rem" }}>
                                    <div className="card-header bg-dark text-light" ><h3>Specialty haircut</h3></div>
                                    <div className="card-body" style={{ backgroundColor: "#F7E7CE" }}>
                                        <h3 className="card-title text-center">$45</h3>
                                        <p className="card-text" style={{ textAlign: "justify" }}>Consider offering various specialty hair options such as Afros, Dreadlocks, Mohawks, Fades with Designs, Undercuts, or other unique styles. Clearly outline these specialty options in your menu and consider charging extra for more complex designs. <br /><br />
                                            Detail the service process, including consultation, shaping, styling, and aftercare advice. Additionally, consider offering premium add-ons such as hair treatments or styling products.</p>
                                        <button className="pricebtn">GRAB THIS DEAL</button>
                                    </div>
                                </div>
                                <div className="card text-dark bg-light mb-3" style={{ width: "25rem" }}>
                                    <div className="card-header bg-dark text-light"><h3>Signature package</h3></div>
                                    <div className="card-body" style={{ backgroundColor: "#F7E7CE" }}>
                                        <h3 className="card-title text-center">$395</h3>
                                        <p className="card-text" style={{ textAlign: "justify" }}>Consider offering various specialty hair options such as Afros, Dreadlocks, Mohawks, Fades with Designs, Undercuts, or other unique styles. Clearly outline these specialty options in your menu and consider charging extra for more complex designs. <br /><br />
                                            Detail the service process, including consultation, shaping, styling, and aftercare advice. Additionally, consider offering premium add-ons such as hair treatments or styling products.</p>
                                        <button className="pricebtn">GRAB THIS DEAL</button>
                                    </div>
                                </div>
                                <div className="card text-dark bg-light mb-3" style={{ width: "25rem" }}>
                                    <div className="card-header bg-dark text-light"><h3>Elite grooming membership</h3></div>
                                    <div className="card-body" style={{ backgroundColor: "#F7E7CE" }}>
                                        <h3 className="card-title text-center">$699</h3>
                                        <p className="card-text" style={{ textAlign: "justify" }}>Consider offering various specialty hair options such as Afros, Dreadlocks, Mohawks, Fades with Designs, Undercuts, or other unique styles. Clearly outline these specialty options in your menu and consider charging extra for more complex designs. <br /><br />
                                            Detail the service process, including consultation, shaping, styling, and aftercare advice. Additionally, consider offering premium add-ons such as hair treatments or styling products.</p>
                                        <button className="pricebtn">GRAB THIS DEAL</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* --------------section-3 (packages) end------------- */}


                {/* --------------section-4 (service menu) start------------- */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="service-4">
                            <p>Focus On Your Beauty</p>
                            <h1>Our Service Menu</h1>
                            <div className="row mt-5">
                                <div className="col-7">
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
                                <div className="col-5">
                                    <img src={servicehero} alt="" style={{ height: "500px", width: "500px" }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* --------------section-4 (service menu) end------------- */}


                {/* --------------section-5 (beauty) start------------- */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="service-5"></div>
                    </div>
                </div>
                {/* --------------section-5 (beauty) end------------- */}
            </div>
        </>
    )
}
export default Service