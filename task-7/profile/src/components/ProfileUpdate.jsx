import React, { useRef, useState } from "react";

export default function ProfileUpdate() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  );

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={image} alt="Profile" className="profile-image" />

        <button className="upload-btn" onClick={handleButtonClick}>
          Change Profile
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          hidden
        />
      </div>
    </div>
  );
}
