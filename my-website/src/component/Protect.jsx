import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

function Protect({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log("Hello 👋 User is NOT signed in");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return <>Loading...</>;
  }

  if (!isSignedIn) {
    return (
      <div style={{ marginTop: "120px", textAlign: "center", padding: "20px" }}>
        <h2>You are not signed in.</h2>
        <p>Please sign in.</p>
      </div>
    );
  }

  return <>{children}</>;
}

export default Protect;
