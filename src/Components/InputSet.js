import styles from "./ASimpleTestForm.module.css";
import { useRef } from "react";
const InputSet = ({ areWeOnMobile }) => {
  const inputRef = useRef();
  const scrollTop = () => {
    if (areWeOnMobile) {
      console.log("position from the top", inputRef.current.offsetTop);
      window.scrollTo({
        top: inputRef.current.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };
  const scrollToDefaultPosition = () => {
    if (areWeOnMobile) {
      console.log("position from the current", inputRef.current.offsetTop);
      //window.scrollBy(0, inputRef.current.offsetTop - 300);
    }
  };
  return (
    <div ref={inputRef} className={styles.fromGroup}>
      <input
        onFocus={scrollTop}
        onBlur={scrollToDefaultPosition}
        placeholder="Test Input"
      />
    </div>
  );
};
export default InputSet;
