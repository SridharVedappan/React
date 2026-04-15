import { useContext } from "react";
import { FormContext } from "./Parent";
const Fields = () => {
  const { formData, handleChange, theme } = useContext(FormContext);

  return (
    <div className={`fields ${theme}`}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default Fields;
