import { forwardRef } from 'react';

import styles from './Textarea.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <textarea className={styles.textarea} ref={ref} {...props} />;
  },
);

export default Textarea;
