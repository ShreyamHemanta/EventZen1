import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch user data from backend (replace with actual API endpoint)
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5008/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        <strong>Name: </strong> {user.name}
      </div>
      <div className="profile-info">
        <strong>Email: </strong> {user.email}
      </div>
      <button className="profile-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
