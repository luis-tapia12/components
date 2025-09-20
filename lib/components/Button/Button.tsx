import { forwardRef } from 'react';

import styles from './Button.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <button className={styles.button} ref={ref} {...props} />;
});

export default Button;
