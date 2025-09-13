import React from 'react'
import facemask1 from '../assets/facemask1.jpeg'
import facemask2 from '../assets/facemask2.jpg'
import facemask3 from '../assets/facemask3.jpg'
import facemask4 from '../assets/facemask4.jpeg'
import facemask5 from '../assets/facemask5.jpeg'
import facemask6 from '../assets/facemask6.jpg'
import facemask7 from '../assets/facemask7.jpg'

function FaceMask() {
    return (
        <div>
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
                            <a className="nav-link active" aria-current="page" href="/gallery">All</a>
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
                            <img src={facemask1} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                        <div className="col-4">
                            <img src={facemask2} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                        <div className="col-4">
                            <img src={facemask3} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src={facemask4} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                        <div className="col-4">
                            <img src={facemask5} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                        <div className="col-4">
                            <img src={facemask6} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src={facemask7} alt="" style={{ height: "320px", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaceMask
