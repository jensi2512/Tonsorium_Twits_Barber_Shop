import React from 'react'
import '../Static/Ourteam.css'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import team7 from '../assets/team7.jpg'
import team8 from '../assets/team8.jpg'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
import company5 from '../assets/company5.png'
import company6 from '../assets/company6.png'

function OurTeam() {
    return (
        <>
            <div className="OurTeam">
                <div className="container-fluid mt-5 px-5" style={{ backgroundColor: "#333333" }}>
                    <div className="Team-1 py-5 text-center text-light">
                        <h1>Our Team</h1>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row text-center">
                        <h1>Our awesome team members</h1>
                        <i className="bi bi-scissors fs-1 " style={{ rotate: "90deg" }}></i>
                        <p>Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. <br />
                            Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros, vel mattis libero.</p>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="team-box">
                        <div className="row text-center">
                            <div className="col-3">
                                <div className="card team-card" style={{ borderRadius: "25px" }}>
                                    <img src={team1} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team2} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team3} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team4} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 text-center">
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team5} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team6} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team7} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card team-card">
                                    <img src={team8} className="team-card-img-top" alt="..." />
                                    <div className="social d-flex justify-content-center" style={{ gap: "20px" }}>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-facebook fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-twitter fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-linkedin fs-5"></i>
                                        </div>
                                        <div className="social-box rounded-circle">
                                            <i className="bi bi-youtube fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="card-body-text my-4">
                                        <h3 className="card-title">Steels Paul</h3>
                                        <p className="card-text">Master Barber</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row text-center">
                        <h1>Our testimonial says</h1>
                        <i className="bi bi-scissors fs-1 " style={{ rotate: "90deg" }}></i>
                        <p>Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. <br />
                            Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros, vel mattis libero.</p>
                    </div>
                    <div className="comment mt-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="comment-box text-justify border p-4">
                                    <div className="comment-profile d-flex mb-4" style={{ gap: "35px" }}>
                                        <img className='comment-img' src={team1} alt="" />
                                        <div className="text mt-4">
                                            <h3>Sumit Israni</h3>
                                            <p>Shaving Expert</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore facere? Deserunt, alias excepturi! Nostrum accusantium sint, minus adipisci voluptate delectus voluptatem aliquid aperiam labore, corporis ipsa sit ratione perspiciatis?</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="comment-box text-justify border p-4">
                                    <div className="comment-profile d-flex mb-4" style={{ gap: "35px" }}>
                                        <img className='comment-img' src={team1} alt="" />
                                        <div className="text mt-4">
                                            <h3>John Sina</h3>
                                            <p>Makeup Expert</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore facere? Deserunt, alias excepturi! Nostrum accusantium sint, minus adipisci voluptate delectus voluptatem aliquid aperiam labore, corporis ipsa sit ratione perspiciatis?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <div className="comment-box text-justify border p-4">
                                    <div className="comment-profile d-flex mb-4" style={{ gap: "35px" }}>
                                        <img src={team1} alt="" className='comment-img' />
                                        <div className="text mt-4">
                                            <h3>Elina Barua</h3>
                                            <p>Color Expert</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore facere? Deserunt, alias excepturi! Nostrum accusantium sint, minus adipisci voluptate delectus voluptatem aliquid aperiam labore, corporis ipsa sit ratione perspiciatis?</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="comment-box text-justify border p-4">
                                    <div className="comment-profile d-flex mb-4" style={{ gap: "35px" }}>
                                        <img src={team1} alt="" className='comment-img' />
                                        <div className="text mt-4">
                                            <h3>Dolly Paul</h3>
                                            <p>Cutting Master</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore facere? Deserunt, alias excepturi! Nostrum accusantium sint, minus adipisci voluptate delectus voluptatem aliquid aperiam labore, corporis ipsa sit ratione perspiciatis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-2">
                            <img src={company1} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={company2} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={company3} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={company4} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={company5} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={company6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam
