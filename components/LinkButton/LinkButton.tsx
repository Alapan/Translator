import Link from 'next/link';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
  buttonText: string;
  link: string;
}

const LinkButton = ({ buttonText, link }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <div className={styles.linkButton}>
        { buttonText }
      </div>
    </Link>
  );
};

export default LinkButton;
