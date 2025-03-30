import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Decode JWT and get nameid as username
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        console.log("Decoded Token:", decodedToken);

        const username = decodedToken.nameid; // Use nameid instead of username

        if (!username) {
          console.error("Username (nameid) not found in token");
          return;
        }

        // Fetch user profile using username
        const response = await fetch(`http://localhost:5008/api/user/profile/${username}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="profile-info">
        <strong>Username: </strong> {user.username}
      </div>
      <div className="profile-info">
        <strong>Email: </strong> {user.email}
      </div>
      <button className="profile-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
