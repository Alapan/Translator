interface TranslationResultProps {
  text: string;
}

const TranslationResult = ({ text }: TranslationResultProps) => {
  return (
    <div>{text}</div>
  );
}

export default TranslationResult;
