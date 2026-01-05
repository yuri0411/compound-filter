import styles from "./Radio.module.css";
import { forwardRef } from "react";

type RadioProps = {
  name: string;
  // value: string;
  items: { label: string; value: string }[];
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ name, items, ...radioProps }, ref) => {
    return (
      <div>
        {items.map((item) => (
          <label key={item.value} htmlFor={item.value} className={styles.label}>
            <input
              name={name}
              ref={ref}
              type="radio"
              id={item.value}
              value={item.value}
              className={styles.radio}
              {...radioProps}
            />
            {item.label}
          </label>
        ))}
      </div>
    );
  }
);
