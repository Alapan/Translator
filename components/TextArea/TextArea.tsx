import { ChangeEvent, useEffect, useState } from 'react';

import styles from './TextArea.module.css';

interface TextAreaProps {
  displayText?: string;
  placeholder: string;
  className: string;
  isDisabled: boolean;
  formFieldName?: string;
}

const TextArea = ({ displayText, placeholder, className, isDisabled, formFieldName }: TextAreaProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isDisabled && displayText) {
      setValue(displayText);
    }
  }, [displayText]);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  return (
    <div className={className}>
      <textarea
        aria-label={placeholder}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={isDisabled}
        name={formFieldName}
        className={styles.textareaCls}
      />
    </div>
  );
}

export default TextArea;
