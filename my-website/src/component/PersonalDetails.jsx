import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPersonalDetails } from "../server";
import { useUser } from "@clerk/clerk-react";
import '../Static/PersonalDetails.css'
function PersonalDetails() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const [detailsData, setDetailsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    address2: "",
    city: "",
    pinCode: "",
    state: "",
  });

  function handleChange(e) {
    setDetailsData((preval) => ({
      ...preval,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(detailsData);
    await postPersonalDetails(detailsData);
    setDetailsData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      address2: "",
      city: "",
      pinCode: "",
      state: "",
      // userName: user.userName || "",
      // Mobile: "",
      // email: user.primaryEmailAddress.emailAddress || "",
      // message: "",
    });
    alert("Your replay sent");
  }
  if (!isSignedIn) {
    console.log("hii");
    return <h1>Please Signin...</h1>;
  }
  return (
    <>
      <div className="main px-5 mt-5 text-dark">
        <div className="container">
          <div className="row">
            <div className="personalDetails mt-5">
              <p className="personalDetails-title">Personal Details</p>
              <p className="personalDetails-text">
                To become a member, Please fill out this form...
              </p>
            </div>
            <div className="col-12 m-auto">
              <form action="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6 my-3">
                    <label for="inputEmail4" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      placeholder="First name"
                      aria-label="First name"
                      name="firstName"
                      value={detailsData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 my-3">
                    <label for="inputEmail4" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      placeholder="Last name"
                      aria-label="Last name"
                      name="lastName"
                      value={detailsData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control p-3 rounded-0"
                      id="inputEmail4"
                      placeholder="Email"
                      name="email"
                      value={detailsData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label for="inputEmail4" className="form-label">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      className="form-control p-3 rounded-0"
                      id="inputTel"
                      placeholder="Phone No."
                      name="mobile"
                      value={detailsData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      name="address"
                      value={detailsData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label for="inputAddress2" className="form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                      name="address2"
                      value={detailsData.address2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 my-3">
                    <label for="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      id="inputCity"
                      placeholder="City"
                      name="city"
                      value={detailsData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 my-3">
                    <label for="inputZip" className="form-label">
                      Pin code
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      id="inputZip"
                      placeholder="Pin code"
                      name="pinCode"
                      value={detailsData.pinCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label for="inputEmail4" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-0"
                      id="inputText"
                      placeholder="State"
                      name="state"
                      value={detailsData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <div className=" text-end mt-4 mb-5 d-flex">
                      <button
                        type="button"
                        className="btn btn-dark personalDetails-btn1 px-4 py-2 mx-2 rounded-0 btn-lg"
                        onClick={() => navigate(-1)}>
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn personalDetails-btn px-4 py-2 ms-2 rounded-0 btn-lg"
                        onClick={() => navigate("/payment")}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;