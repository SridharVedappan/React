import { useState, createContext } from "react";
import Form from "./Form";

export const FormContext = createContext();
const Parent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <FormContext.Provider
      value={{ formData, handleChange, theme, toggleTheme }}
    >
      <div className={`app ${theme}`}>
        <h1>Theme and Form</h1>
        <Form />
      </div>
    </FormContext.Provider>
  );
};

export default Parent;
