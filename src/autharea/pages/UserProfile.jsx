import React from "react";
import "../styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="container">
        <div className="row">
          <div className="ucerContainer">
            <div className="leftSide">
              <h2>Welcome, Julius</h2>
              <div className="leftsideBody">
                <ul>
                  <li>items Purchased</li>
                  <li>Most Purchased Item</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </div>
            <div className="rightSide">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
