import React from "react";
import {} from "./Firebase/Firebase";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    // Redirect
    return <Navigate replace to="/login" />;
  } else {
    return <div>Hello {} </div>;
  }
};

export default Profile;
