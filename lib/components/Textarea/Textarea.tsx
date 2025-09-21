import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Textarea.module.css';

import type { FormSize } from '../@types/global';

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: FormSize;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <textarea
        className={classNames(styles.textarea, styles[size])}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Textarea;
