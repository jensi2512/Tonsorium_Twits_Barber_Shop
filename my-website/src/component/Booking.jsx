import React, { useEffect } from "react";
import Calendly from "./Calendly";
import Pay from "./Pay";
import { useUser } from "@clerk/clerk-react";

export default function Booking() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return <>Loading...</>;
    }

    if (!isSignedIn) {
        return (
            <div style={{ marginTop: "120px", textAlign: "center", padding: "20px" }}>
                <h2>You are not signed in.</h2>
                <p>Please sign in to book an appointment.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="bookhero" style={{ marginTop: "120px" }}>
                    <h2>Book Appointment</h2>
                    <div className="book">
                        <h3>Click on a Date and Pick an Available TimeSlot</h3>
                    </div>
                    <Calendly />
                    <br /><br />
                    <Pay />
                    <hr />
                </div>
            </div>
        </div>
    );
}
