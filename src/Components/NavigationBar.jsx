import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.navgationDiv}>
      <span className={styles["heading-span"]}>
        Mobile Browser Checker Application
      </span>
    </div>
  );
};
export default NavigationBar;
