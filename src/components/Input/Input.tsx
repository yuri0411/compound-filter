import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...inputProps }, ref) => {
    return <input ref={ref} className={styles.input} {...inputProps} />;
  }
);
