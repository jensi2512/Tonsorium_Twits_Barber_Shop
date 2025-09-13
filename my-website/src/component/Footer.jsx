import { Link } from "react-router-dom";
import "../Static/Footer.css"
import footer1 from "../assets/footer1.png"
import footerlogo from '../assets/footerlogo.png'
import { useUser } from "@clerk/clerk-react";
import emailjs from "@emailjs/browser"
import React, { useState } from 'react'

function Footer() {
    const { isLoaded, user, isSignedIn } = useUser()
    const [email, setEmail] = useState("")
    if (!isLoaded) {
        return <h1>Lodding...</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (isSignedIn) {
            await emailjs.send("service_g04nhoh", "template_abbtsem", { to_email: user.primaryEmailAddress.emailAddress, message: "Thank You for Subscribe" }, "yB8W9bSpbuhxzsYiq")
            alert("Thank You for Subscribe")
        } else {
            alert("Please Sign in")
        }
    }
    return (
        <>
            <div className="main mt-5">
                <div className="container-fluid mt-5" style={{ backgroundColor: "#F7E7CE" }}>
                    <div className="container">
                        <div className="footer1">
                            <div className="row">
                                <div className="footer-1 col-7 p-5">
                                    <h5>Time Schedule</h5>
                                    <h1>Working Hours</h1>
                                    <p>Nemo ipsam egestas volute turpis varius ipsum egestas purus diam ligula sapien ultrice sapien tempor aliquam tortor ipsum and augue turpis quaerat aliquet congue and molestie magna in congue undo aliquet congue ultrices quaerat purus justo</p>
                                    <img src={footer1} alt=""/>
                                </div>
                                <div className="col-5" style={{ padding: "100px" }}>
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
                <div className="container-fluid" style={{ backgroundColor: "#F7E7CE" }}>
                    <div className="container">
                        <div className="footer">
                            <h1>Join Our Newsletter</h1>
                            <p>Receive beauty and wellness insights, events and latest offers!</p>
                            <form action="" onSubmit={handleSubmit}>
                                <input type="email" value={isSignedIn ? user.primaryEmailAddress.emailAddress : email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type='submit' className="Subscribe bg-danger text-light px-3">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="footer-2">
                        <div className="row">

                            <div className="col-3">
                                <a href="/"><img src={footerlogo} alt="" style={{height : "50px"}}/></a>
                                <p>Mehsana</p>
                            </div>
                            <div className="col-3">
                                <h5>Get Touch</h5>
                                <p>+91 7016693435</p>
                                <p>jensipatel2512@gmail.com</p>
                            </div>
                            <div className="col-3">
                                <h5>Working Hours</h5>
                                <p>Mon-Fri: 10:00AM - 9:00PM</p>
                                <p>Sat-Sun: 10:00AM - 7:00PM</p>
                            </div>
                            <div className="col-3">
                                <h5>Social Media</h5>

                                <div className="footer-icon">
                                    <i className="bi bi-facebook me-3"></i>
                                    <i className="bi bi-twitter me-3"></i>
                                    <i className="bi bi-instagram me-3"></i>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p>©jensi. All rights reserved 2025</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer