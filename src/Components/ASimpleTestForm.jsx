import styles from "./ASimpleTestForm.module.css";
import "styled-components/macro";
import { useRef } from "react";

const ASimpleTestForm = ({ areWeOnMobile }) => {
  const inputRef = useRef();
  console.log("Are we on the mobile browser ? ", areWeOnMobile);
  const scrollTop = () => {
    if (areWeOnMobile) {
      console.log("position from the top", inputRef.current.offsetTop);
      window.scrollTo({
        top: inputRef.current.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <form
        css={`
          margin-bottom: 600px;
        `}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form Submitted !");
        }}
      >
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div ref={inputRef} className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input onClick={scrollTop} placeholder="Test Input" />
        </div>

        <div className={styles.fromGroup}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default ASimpleTestForm;
