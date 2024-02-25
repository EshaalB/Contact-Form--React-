import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, linkUrl, ...rest }) => {
  return (
    <a href={`${linkUrl}`} target="_blank" rel="noreferrer">
      <button
        {...rest}
        className={isOutline ? styles.outline_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>{" "}
    </a>
  );
};

export default Button;
