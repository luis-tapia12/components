import { forwardRef } from 'react';

import styles from './Select.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return <select className={styles.select} ref={ref} {...props} />;
});

export default Select;
