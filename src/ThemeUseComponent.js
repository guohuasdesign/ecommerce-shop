import { useContext, useState } from "react";
import { ThemeContext } from "./common";
import ThemeUseComponent from "./ThemeUseComponent";

// we are updating the ThemeContext value and also reading it
export default function ThemeUpdateComponent() {
  let value = useContext(ThemeContext);
  let [textColor, setColor] = useState(value);
  //using ThemeContext -> color in p tag style
  //updating color on button click
  return (
    <ThemeContext value={textColor}>
      <p style={{ color: textColor }}>Parent Component</p>
      <ThemeUseComponent />
      <button
        onClick={() => {
          setColor(textColor === "green" ? "red" : "green");
        }}
      >
        {textColor === "green" ? "Red" : "Green"} Color
      </button>
    </ThemeContext>
  );
}
