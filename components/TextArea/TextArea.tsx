interface TextAreaProps {
  text: string;
}

const TextArea = ({ text }: TextAreaProps) => {
  return (
    <div>{text}</div>
  );
}

export default TextArea;
