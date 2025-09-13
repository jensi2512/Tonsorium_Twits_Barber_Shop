import Gimage1 from '../assets/Gimage1.jpg'
// import Gimage1 from '../assets/Gimage1.jpg'
import Gimage2 from '../assets/Gimage2.jpg'
import Gimage3 from '../assets/Gimage3.jpg'
import Gimage4 from '../assets/Gimage4.jpg'
import Gimage5 from '../assets/Gimage5.jpg'
import Gimage6 from '../assets/Gimage6.jpg'
import Gimage7 from '../assets/Gimage7.jpg'
import Gimage8 from '../assets/Gimage8.jpg'
import Gimage9 from '../assets/Gimage9.jpg'
import Gimage10 from '../assets/Gimage10.jpg'
import Gimage11 from '../assets/Gimage11.jpg'
import Gimage12 from '../assets/Gimage12.jpg'
import Gimage13 from '../assets/Gimage13.jpg'
import Gimage14 from '../assets/Gimage14.jpg'
import Gimage15 from '../assets/Gimage15.jpg'
import Gimage16 from '../assets/Gimage16.jpg'
import Gimage17 from '../assets/Gimage17.jpg'
import Gimage18 from '../assets/Gimage18.jpg'
import Gimage19 from '../assets/Gimage19.jpg'
import Gimage21 from '../assets/Gimage21.jpg'
import Gimage22 from '../assets/Gimage22.jpg'
import Gimage23 from '../assets/Gimage23.jpg'
import Gimage24 from '../assets/Gimage24.jpg'
import Gimage25 from '../assets/Gimage25.jpg'
import Gimage26 from '../assets/Gimage26.jpg'
import Gimage27 from '../assets/Gimage27.avif'
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import certificate3 from '../assets/certificate3.jpg'
import certificate4 from '../assets/certificate4.jpg'
function Gallery() {
    return (
        <>
            <div className="Gallery">
                <div className="container-fuild px-5" style={{ backgroundColor: "#333333" }}>
                    <div className="gallery-1">
                        <div className="about-1">
                            <h1>Gallery</h1>
                            <p style={{ width: "40%", margin: "auto", textAlign: "justify" }}>I'm a paragraph. Click
                                here to add your own text
                                and edit me. It’s easy. Just
                                click “Edit Text” or double
                                click me to add your own content
                                and make changes to the font.
                                I’m a great place for you to
                                tell a story and let your users
                                know a little more about you.</p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="gallery-2">
                        {/* <div className="collapse navbar-collapse"> */}
                        <ul className="gallerylist d-flex justify-content-center" style={{ listStyle: "none", gap: "20px" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/haircut">Hair Cut</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/facemask">Face Mask</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shaving">Shaving</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/haircolor">Hair Color</a>
                            </li>
                        </ul>
                        {/* </div> */}
                    </div>
                </div>
                <div className="container-fuild mt-5 p-3">
                    <div className="gallery-imgs">
                        <div className="row">
                            <div className="col-4">
                                <img src={Gimage1} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage2} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage3} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img src={Gimage4} alt="" style={{ height: "320px" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage5} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage6} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img src={Gimage7} alt="" style={{ height: "648px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage8} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage9} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <img src={Gimage10} alt="" style={{ height: "648px", width: "100%" }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img src={Gimage11} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage12} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={Gimage13} alt="" style={{ height: "320px", width: "100%" }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage14} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage15} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage16} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage18} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={Gimage16} alt="" style={{ height: "648px", width: "100%" }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img src={Gimage19} alt="" style={{ height: "648px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage27} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage21} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage22} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage23} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage26} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage25} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <img src={Gimage24} alt="" style={{ height: "648px", width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={Gimage27} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <img src={Gimage17} alt="" style={{ height: "320px", width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="about-6" style={{ textAlign: "center" }}>
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
            </div >
        </>
    )
}
export default Gallery