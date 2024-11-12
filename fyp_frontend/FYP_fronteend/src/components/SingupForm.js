// SignUpForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SignUpForm.module.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    picture: null,
    address: "",
    phone: "",
    description: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);
  // const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/getAllCities");
        setCities(response.data);
      } catch (error) {
        console.error("There was an error fetching the cities!", error);
      }
    };

    // const fetchCsrfToken = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8000/api/getCsrfToken");
    //     setCsrfToken(response.data.csrfToken);
    //   } catch (error) {
    //     console.error("There was an error fetching the CSRF token!", error);
    //   }
    // };

    fetchCities();
    // fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("phone_number", formData.phone);
    data.append("description", formData.description);
    data.append("city", formData.city);
    data.append("picture", formData.picture);
    // data.append("_csrf", csrfToken); // Include the CSRF token

    try {
      const response = await axios.post("http://localhost:8000/user/signup", data);
      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.type === "field") {
        setError(error.response.data.msg);
      } else {
        console.error("There was an error submitting the form!", error);
      }
    }
  };

  return (
    <div className={styles.container1}>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        {error && <p className={styles.error}>{error}</p>}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="picture">Profile Picture:</label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="123-456-7890"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="city">Select City:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select your city
          </option>
          {cities.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}
            </option>
          ))}
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
