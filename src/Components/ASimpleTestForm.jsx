import styles from "./ASimpleTestForm.module.css";
import "styled-components/macro";

const ASimpleTestForm = ({ areWeOnMobile }) => {
  console.log("Are we on the mobile browser ? ", areWeOnMobile);
  const scrollTop = () => {
    console.log("i executed");
    if (areWeOnMobile) {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };
  return (
    <>
      <form
        css={`
          margin-top: 30vh;
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
          <button>Submit</button>
        </div>
      </form>
      {areWeOnMobile && (
        <span
          css={`
            position: absolute;
            top: 1200px;
          `}
        >
          Yes you are on mobile browser
        </span>
      )}
    </>
  );
};
export default ASimpleTestForm;
