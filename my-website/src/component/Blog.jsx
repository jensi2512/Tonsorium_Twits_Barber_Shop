import React from 'react'
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import blog4 from '../assets/blog-4.png'
import blog5 from '../assets/blog-5.png'
import blog6 from '../assets/blog-6.png'
import blog7 from '../assets/blog-7.png'
import blog8 from '../assets/blog-8.png'
import blog9 from '../assets/blog-9.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Blog() {
  const Navigate = useNavigate()
  return (
    <>
      <div className="Blog">
        <div className="container-fuild px-5" style={{ backgroundColor: "#333333" }}>
          <div className="about-1">
            <h1>Blog</h1>
            <button onClick={() => Navigate("/service") }>View Salon Menu</button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="blog-card">
            <div className="row">
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Revamp Your Style: Barbershop Makeover Ideas for a Fresh New Look</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>From Fades to Pompadours, Understanding Popular Haircut Styles</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Get the Look of Your Favorite Stars at Your Local Barbershop</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Exploring the Classic Shave and Traditional Grooming Rituals</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Revamp Your Style: Barbershop Makeover Ideas for a Fresh New Look</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog6} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Expert Advice from Barbers for Healthy and Stylish Hair</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog7} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>Stay on Trend with These Barbershop</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog8} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>HOW TO FIND A TOP BARBERSHOP</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "26rem" }}>
                  <img src={blog9} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" style={{ fontWeight: "bold" }}>KEEP YOUR CUSTOMER COMING BACK</p>
                    <p style={{ color: "#gray" }}>June 23, 2023  No Comments</p>
                    <p style={{ textAlign: "justify" }}>These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.</p>
                    <Link to="/blogdetails"><i className="bi bi-three-dots text-danger fs-1 "></i></Link>
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

export default Blog
