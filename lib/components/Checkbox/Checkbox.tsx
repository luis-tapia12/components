import { forwardRef } from 'react';

import styles from './Checkbox.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return (
    <input className={styles.checkbox} ref={ref} {...props} type="checkbox" />
  );
});

export default Checkbox;
