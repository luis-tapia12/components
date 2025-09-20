import { forwardRef } from 'react';

import styles from './Input.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});

export default Input;
