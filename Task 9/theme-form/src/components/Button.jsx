import { useContext } from "react";
import { FormContext } from "./Parent";

const Button = () => {
  const { toggleTheme, theme } = useContext(FormContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default Button;
