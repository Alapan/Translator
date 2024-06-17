import { FormEventHandler, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
}

const Form = ({ children, onSubmit, buttonText }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type='submit'>{buttonText}</button>
    </form>
  );
}

export default Form;
