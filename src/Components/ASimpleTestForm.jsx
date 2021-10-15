import styles from "./ASimpleTestForm.module.css";
import "styled-components/macro";
import { useRef } from "react";

const ASimpleTestForm = ({ areWeOnMobile }) => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();
  const inputRef7 = useRef();
  const inputRef8 = useRef();
  const inputRef9 = useRef();
  const inputRef10 = useRef();
  const inputRef11 = useRef();
  const inputRef12 = useRef();
  const inputRef13 = useRef();
  const inputRef14 = useRef();
  const inputRef15 = useRef();
  const inputRef16 = useRef();
  const inputRef17 = useRef();

  console.log("Are we on the mobile browser ? ", areWeOnMobile);
  const scrollTop = (refObject) => {
    if (areWeOnMobile) {
      console.log("position from the top", refObject.current.offsetTop);
      window.scrollTo({
        top: refObject.current.offsetTop - 300,
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
        <div key="1" ref={inputRef1} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef1)}
            placeholder="Test Input"
          />
        </div>
        <div key="2" ref={inputRef2} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef2)}
            placeholder="Test Input"
          />
        </div>
        <div key="3" ref={inputRef3} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef3)}
            placeholder="Test Input"
          />
        </div>
        <div key="4" ref={inputRef4} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef4)}
            placeholder="Test Input"
          />
        </div>
        <div key="5" ref={inputRef5} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef5)}
            placeholder="Test Input"
          />
        </div>
        <div key="6" ref={inputRef6} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef6)}
            placeholder="Test Input"
          />
        </div>
        <div key="7" ref={inputRef7} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef7)}
            placeholder="Test Input"
          />
        </div>
        <div key="8" ref={inputRef8} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef8)}
            placeholder="Test Input"
          />
        </div>
        <div key="9" ref={inputRef9} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef9)}
            placeholder="Test Input"
          />
        </div>
        <div key="10" ref={inputRef10} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef10)}
            placeholder="Test Input"
          />
        </div>
        <div key="11" ref={inputRef11} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef11)}
            placeholder="Test Input"
          />
        </div>
        <div key="12" ref={inputRef12} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef12)}
            placeholder="Test Input"
          />
        </div>
        <div key="13" ref={inputRef13} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef13)}
            placeholder="Test Input"
          />
        </div>
        <div key="14" ref={inputRef14} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef14)}
            placeholder="Test Input"
          />
        </div>
        <div key="15" ref={inputRef15} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef15)}
            placeholder="Test Input"
          />
        </div>
        <div key="16" ref={inputRef16} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef16)}
            placeholder="Test Input"
          />
        </div>
        <div key="17" ref={inputRef17} className={styles.fromGroup}>
          <input
            onClick={scrollTop.bind(null, inputRef17)}
            placeholder="Test Input"
          />
        </div>

        <div className={styles.fromGroup}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default ASimpleTestForm;
