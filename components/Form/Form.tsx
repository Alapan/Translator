import { FormEventHandler, ReactNode } from 'react';

import styles from './Form.module.css';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
}

const Form = ({ children, onSubmit, buttonText }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type='submit' className={styles.submitBtn}>{buttonText}</button>
    </form>
  );
}

export default Form;
