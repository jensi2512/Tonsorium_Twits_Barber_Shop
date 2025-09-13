import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home'
import About from './component/About'
import Blog from './component/Blog'
import Service from './component/Service'
import Navber from './component/Navbar'
import Footer from './component/Footer'
import { ToastContainer } from "react-toastify"
import Gallery from './component/Gallery'
import BlogDetails from './component/BlogDetails'
import OurTeam from './component/OurTeam'
import Shop from './component/shop'
import ProductDetails from './component/ProductDetails'
import Payment from './component/Payment'
import MembershipDetails from './component/MembershipDetails'
import Cart from './component/Cart'
import PersonalDetails from './component/PersonalDetails'
import HairCutGallery from './component/HairCutGallery'
import HairColor from './component/HairColor'
import FaceMask from './component/FaceMask'
import Shaving from './component/Shaving'
import { Protect } from '@clerk/clerk-react'
import Booking from './component/Booking'
import Pay from './component/Pay'
import Paypal from './component/Paypal'

function App() {
    return (<>
        <BrowserRouter>
            <Navber />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/blogdetails' element={<BlogDetails />} />
                <Route path='/ourteam' element={<OurTeam />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/productdetails' element={<ProductDetails />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/membership' element={<MembershipDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path="/personalDetails" element={<Protect> <PersonalDetails /> </Protect>} />
                <Route path='/haircut' element={<HairCutGallery/>}/>
                <Route path='/haircolor' element={<HairColor/>}/>
                <Route path='/shaving' element={<Shaving/>}/>
                <Route path='/facemask' element={<FaceMask/>}/>
                <Route path='/booking' element={ <Booking/>}/>
                <Route path='/pay' element={<Pay/>}/>
                <Route path='/payal' element={<Paypal/>}/>

                {/* <Route path='/personaldetails' element = {<PersonalDetails/>}/> */}


            </Routes>
            <ToastContainer
                position="top-center" />
            <Footer />
        </BrowserRouter>
    </>)
}

export default App
