import { ChangeEvent, useState } from 'react';

const InputText = () => {

  const [input, setInput] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  return (
    <input
      type='text'
      aria-label='text'
      placeholder='Type text here'
      name='inputText'
      value={input}
      onChange={onChange}
    />
  );
}

export default InputText;
