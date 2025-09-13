import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MembershipDetailsData } from "../dummy/MembershipDetailsDummyData.js";
import '../Static/MembershipDetails.css'
function MembershipDetails() {
  const navigate = useNavigate();
  const [membershipData, setMembershipData] = useState({});
  const [showBox, setShowBox] = useState(false);
  function handleClick(e, id) {
    e.preventDefault();
    const obj = MembershipDetailsData.find((element) => element.id === id);
    setMembershipData(obj);
    setShowBox(true);
  }
  return (
    <>
      <div className="main text-light px-5">
        {/* membership-offer Start */}
        <div className="container-fluid">
          <div className="row">
            <div className="select-membership-text mt-5">
              <p className="select-membership-title text-dark mt-5">Select Membership </p>
            </div>
            <div className="col-12">
              <div className="d-flex row justify-content-between">
                {MembershipDetailsData.map((ele, index) => (
                  <div
                    className="col-3 select-membership-offer bg-dark py-2 px-3 my-2"
                    onClick={(e) => handleClick(e, ele.id)}
                    key={index}>
                    <ul className="select-membership-list">
                      <li className="select-membership-list-text ms-2 mt-3">
                        {ele.month}
                      </li>
                      <li className="select-membership-list-text ms-2 my-2 ">
                        {ele.days}
                      </li>
                    </ul>
                    <p className="select-membership-list-text ms-2  mt-5 my-2">
                      <a className="select-membership-list-price" href="">
                        {ele.price}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* membership-offer end */}

        {/* membership-input Start */}
        <div className="container-fluid">
          {showBox && (
            <div className="container-fluid">
              <div className="row">
                <div className="col-8 my-4">
                  <div className="box membership-input bg-dark p-4">
                    <div className="membership-input-text d-flex justify-content-between mb-4 px-2">
                      <p className="membership-input-text-title">
                        <a className="membership-input-text-title" href="">
                          Month
                        </a>
                      </p>
                      <p className="membership-input-text-price">
                        <a className="membership-input-text-title" href="">
                          {membershipData.month || ""}
                        </a>
                      </p>
                    </div>
                    <div className="membership-input-text d-flex justify-content-between my-2 px-2">
                      <p className="membership-input-text-title">
                        <a className="membership-input-text-title" href="">
                          Days
                        </a>
                      </p>
                      <p className="membership-input-text-price">
                        <a className="membership-input-text-title" href="">
                          {membershipData.days || ""}
                        </a>
                      </p>
                    </div>
                    <hr />
                    <div className="membership-input-text d-flex justify-content-between mt-3 p-2">
                      <p className="membership-input-text-title-total">
                        <a className="membership-input-text-total fs-3" href="">
                          Total Price
                        </a>
                      </p>
                      <p className="membership-input-text-price">
                        <a className="membership-input-text-total fs-3" href="">
                          {membershipData.price || ""}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className=" text-end py-5 d-flex">
            <button
              type="button"
              className="btn btn-dark membershipDetails-btn1 px-4 py-2 mx-2 rounded-0 btn-lg"
              onClick={() => navigate("/home")}>
              Back
            </button>
            <button
              type="button"
              className="btn membershipDetails-btn px-4 py-2 ms-2 rounded-0 btn-lg"
              onClick={() => navigate("/personalDetails")}>
              Continue
            </button>
          </div>
        </div>
        {/* membership-input end */}
      </div>
    </>
  );
}

export default MembershipDetails;