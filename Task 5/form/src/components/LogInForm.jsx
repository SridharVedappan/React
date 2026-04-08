import React, { useState } from "react";

export default function LogInForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.userName) newErrors.userName = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Invalid email format";

    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number required";
    else if (formData.phoneNumber.length < 10)
      newErrors.phoneNumber = "Must be 10 digits";

    if (!formData.password) newErrors.password = "Password required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.address) newErrors.address = "Address required";
    if (!formData.city) newErrors.city = "City required";
    if (!formData.state) newErrors.state = "State required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code required";
    if (!formData.country) newErrors.country = "Country required";

    return newErrors;
  };

  const handleForm = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleForm}>
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="userName"
              placeholder="Name"
              value={formData.userName}
              onChange={handleChange}
            />
            <span>{errors.userName}</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <span>{errors.phoneNumber}</span>
          </div>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>

        <div className="form-row">
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span>{errors.password}</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span>{errors.confirmPassword}</span>
          </div>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <span>{errors.address}</span>
        </div>

        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <span>{errors.city}</span>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <span>{errors.state}</span>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
            />
            <span>{errors.zipCode}</span>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            <span>{errors.country}</span>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
