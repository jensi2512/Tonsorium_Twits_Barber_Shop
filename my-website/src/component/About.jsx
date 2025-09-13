import "../Static/About.css"
import about1 from "../assets/about1.avif"
import about2 from "../assets/about2.avif"
import about3 from "../assets/about3.avif"
import Edwin from "../assets/Edwin.jpg"
import certificate1 from "../assets/certificate1.jpg"
import certificate2 from "../assets/certificate2.jpg"
import certificate3 from "../assets/certificate3.jpg"
import certificate4 from "../assets/certificate4.jpg"

function About() {
    return (
        <>
        
            <div className="About">
                {/* ------------section 1  start----------------------------- */}
                <div className="container-fuild px-5" style={{ backgroundColor: "#333333" }}>
                    <div className="about-1">
                        <h1>About</h1>
                        <p>I'm a paragraph. Click
                            here to add your own text
                            and edit me. It’s easy. Just
                            click “Edit Text” or double
                            click me to add your own content
                            and make changes to the font.
                            I’m a great place for you to
                            tell a story and let your users
                            know a little more about you.</p>
                        <button>View Salon Menu</button>
                    </div>
                </div>

                {/* ------------section 1  end----------------------------- */}

                {/* ------------section 2 (Why best)  start----------------------------- */}
                <div className="container-fluid" style={{ backgroundColor: "#F7E7CE" }}>
                    <div className="container">
                        <div className="about-2">
                            <div className="row">
                                <div className="col-6" style={{ paddingTop: "150px" }}>
                                    <h1>Why We are the Best?</h1>
                                    <p>We help you look and feel your best with tailored grooming services,
                                        premium products, and expert techniques designed to deliver sharp,
                                        stylish, and confidence-boosting results.</p>
                                </div>
                                <div className="col-6">
                                    <img src={about1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------section 2  end----------------------------- */}

                {/* ------------section 3(welcome)  start----------------------------- */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="about-3">
                            <div className="row">
                                <div className="col-6">                 
                                    <img src={about2} alt=""/>
                                </div>
                                <div className="col-6">
                                    <h1>Welcome to Barbershop</h1>
                                    <p>Our barbershop combines tradition and modernity to deliver precision cuts and grooming services. With skilled barbers and a focus on personalized care, we craft looks that inspire confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------section 3  end----------------------------- */}

                {/* ------------section 4 (Our story)  start----------------------------- */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="about-4">
                            <div className="row">
                                <div className="col-6 mt-5">
                                    <h1>Our Story</h1>
                                    <p>We help you look and feel your best with tailored grooming services, premium products, and expert techniques designed to deliver sharp, stylish, and confidence-boosting results.</p>
                                </div>
                                <div className="col-6">
                                    <img src={about3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------section 4  end----------------------------- */}

                {/* ------------section 5 (barber)  start----------------------------- */}
                <div className="container-fluid mt-5 p-5" style={{ backgroundColor: "#F7E7CE" }}>
                    <div className="container">
                        <div className="about-5" style={{ textAlign: "center" }}>
                            <h1>barber</h1>
                            <p>Our barbers will make you look your best by combining good old traditional haircuts and straight razor shaves with modern techniques</p>
                            <div className="row mt-5">
                                <div className="col-5">
                                    <div className="card" style={{width: "10rem;"}}>
                                        <img src={Edwin} className="card-img-top" alt="..." style={{height : "500px"}}/>
                                        <div className="card-body">
                                            <h2>Edwin Wood</h2>
                                            <h5  style={{color : "#CD875B"}}>Barber</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7" style={{textAlign : "justify"}}>
                                    <h2>Edwin Wood</h2>
                                    <p>Edwin completed an accredited training program offered through a barber and cosmetology school. He has high school diploma and certificate of completion of an accredited barber training program of the National Accrediting Commission of Cosmetology Arts and Sciences. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nulla nihil labore incidunt ullam aspernatur ipsam deserunt fuga voluptates architecto! Dolore magni natus iusto perferendis esse fugit vel assumenda ipsam.</p>
                                    <p>Edwin is one of the most famous and best (as well as the highest paid) barbers in the country. He regularly holds master classes and workshops for barbers both in town and abroad. He is an author of numerous articles on beard/mustache styling in many famous magazines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium fugiat nesciunt illum. Quo, dolores. Laborum architecto iste maxime libero!</p>

                                    <h4 style={{marginTop : "33px"}}>Hair cut</h4>
                                    <div className="about-box-5">100%
                                    </div>
                                    <h4 style={{marginTop : "33px"}}>Shaving</h4>
                                    <div className="about-box-5" style={{width : "400px"}}>80%
                                    </div>
                                    <h4 style={{marginTop : "33px"}}>Beard Trimming</h4>
                                    <div className="about-box-5" style={{width : "300px"}}>60%
                                    </div>
                               
                                    <button style={{marginTop : "40px" , fontSize : "20px"}}>MAKE AN APPOINMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------section 5  end----------------------------- */}

                {/* ------------section 6  start----------------------------- */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="about-6" style={{textAlign : "center"}}>
                            <h1>Professional Certification</h1>
                            <p>In our barbershop, we have gathered the most professional certified <br />barbers and hairdressers to make your hair look perfect</p>

                            <div className="about-boxgroup-6">
                                <img src={certificate1} alt="" />
                                <img src={certificate2} alt="" />
                                <img src={certificate3} alt="" />
                                <img src={certificate4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------section 6  end----------------------------- */}
            </div>
        </>
    )
}

export default About