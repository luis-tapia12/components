import { forwardRef } from 'react';

import styles from './Password.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Password = forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});

export default Password;
