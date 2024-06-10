import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import InputText from '../components/InputText/InputText';
import TranslationResult from '../components/TranslationResult/TranslationResult';
import { FormEvent, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [ translatedText, setTranslatedText ] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = Object.fromEntries(new FormData(event.currentTarget));
    const { inputText } = formValues;
    console.log('INPUT TEXT: ', inputText)
    const headers = {
      'Content-Type': 'application/json'
    };
    const requestBody = {
      query: `
        query($sourceStr: String!, $destinationLangCode: String!){
          translateString(sourceStr: $sourceStr, destinationLangCode: $destinationLangCode)
        }
      `,
      variables: {
        sourceStr: inputText,
        destinationLangCode: 'fi',
      }
    };
    const options = {
      method: 'POST',
      url: '/api/graphql/',
      headers,
      data: requestBody,
    };
    const response = await axios(options);
    setTranslatedText(response.data.data.translateString);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Translator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Translate text here
        </h1>

        <InputText onSubmit={onSubmit}/>
        <TranslationResult text={translatedText} />
      </main>


      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
