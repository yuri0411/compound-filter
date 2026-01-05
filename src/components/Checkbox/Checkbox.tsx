import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name"> {
  name: string;
  label?: ReactNode;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, label, ...checkboxProps }: CheckboxProps, ref) => {
    return (
      <label className={styles.label}>
        <input ref={ref} type="checkbox" name={name} className={styles.input} {...checkboxProps} />
        {label && typeof label === "string" ? <p>{label}</p> : label}
      </label>
    );
  }
);
