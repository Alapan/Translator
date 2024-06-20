import Head from 'next/head';
import LinkButton from '../components/LinkButton/LinkButton';
import styles from '../styles/Home.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Translator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.imgContainer} />
      <div className={styles.textContainer}>{'Translate text to over 30 languages'}</div>
      <div className={styles.btnContainer}>
        <LinkButton buttonText='Go to Translation page' link='/translate' />
      </div>
    </div>
  );
}
