import { forwardRef } from 'react';

import styles from './Radio.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});

export default Radio;
