import styles from "./ASimpleTestForm.module.css";
import "styled-components/macro";

const ASimpleTestForm = ({ areWeOnMobile }) => {
  console.log("Are we on the mobile browser ? ", areWeOnMobile);
  //const scrollTop = () => {
  //  if (areWeOnMobile) {
  //    window.scrollTo({ top: 20, behavior: "smooth" });
  //  }
  //};
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
          <input placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <input placeholder="Test Input" />
        </div>
        <div className={styles.fromGroup}>
          <button>Submit</button>
        </div>
      </form>
      {areWeOnMobile && <span>Yes you are on mobile browser</span>}
    </>
  );
};
export default ASimpleTestForm;
