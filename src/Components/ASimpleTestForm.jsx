import styles from "./ASimpleTestForm.module.css";
import "styled-components/macro";
import InputSet from "./InputSet";

const ASimpleTestForm = ({ areWeOnMobile }) => {
  // console.log("Are we on the mobile browser ? ", areWeOnMobile);

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
        {Array(20)
          .fill("#")
          .map((ele, index) => (
            <InputSet key={index} areWeOnMobile={areWeOnMobile} />
          ))}
        <div className={styles.fromGroup}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default ASimpleTestForm;
