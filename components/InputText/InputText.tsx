import { ChangeEvent, FormEvent, useState } from 'react';

interface InputTextProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const InputText = ({
  onSubmit
}: InputTextProps) => {

  const [input, setInput] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  return (
    <form
      id='input-form'
      aria-label='input form'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        aria-label='text'
        placeholder='Type text here'
        name='inputText'
        value={input}
        onChange={onChange}
      />
      <button type='submit'>Translate</button>
    </form>
  );
}

export default InputText;
