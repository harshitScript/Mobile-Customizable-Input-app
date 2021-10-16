import styles from "./ASimpleTestForm.module.css";
import { useRef } from "react";
const InputSet = ({ areWeOnMobile }) => {
  const inputRef = useRef();
  const scrollTop = () => {
    if (areWeOnMobile) {
      //console.log("position from the top", inputRef.current.offsetTop);
      window.scrollTo({
        top: inputRef.current.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div ref={inputRef} className={styles.fromGroup}>
      <input onClick={scrollTop} placeholder="Test Input" />
    </div>
  );
};
export default InputSet;
