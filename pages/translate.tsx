import { gql } from '@apollo/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FormEvent, FormEventHandler, useState } from 'react';

import { LanguageCode } from '../types';
import client from '../utils/graphQLClient';
import Dropdown from '../components/Dropdown/Dropdown';
import Form from '../components/Form/Form';
import TextArea from '../components/TextArea/TextArea';
import styles from '../styles/Translate.module.css';

const Page = ({
  languageCodes
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [ translatedText, setTranslatedText ] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = Object.fromEntries(new FormData(event.currentTarget));
    const { inputText, languageDropdown } = formValues;

    const response = await client.query(
      {
        query: gql`
          query($sourceStr: String!, $destinationLangCode: String!){
            translateString(sourceStr: $sourceStr, destinationLangCode: $destinationLangCode)
          }
        `,
        variables: {
          sourceStr: inputText,
          destinationLangCode: languageDropdown,
        },
      }
    );
    setTranslatedText(response.data.translateString);
  }

  return (
    <div className={styles.translateFormContainer}>
      <Form onSubmit={onSubmit} buttonText={'Translate'}>
        <Dropdown
          options={languageCodes}
          dropdownName='languageDropdown'
          label='Select language'
        />
        <div className={styles.inputOutputContainer}>
          <TextArea
            className={styles.inputTextArea}
            placeholder='Type input text here'
            isDisabled={false}
            formFieldName='inputText'
          />
          <TextArea
            className={styles.outputTextArea}
            placeholder='Translated text'
            isDisabled={true}
            displayText={translatedText}
          />
        </div>
      </Form>
    </div>
  );
}

export default Page;

export const getStaticProps: GetStaticProps<
  {
    languageCodes: LanguageCode[]
  }
> = async (context) => {

  const { data } = await client.query({
    query: gql`
      query getLanguageCodes{
        getLanguageCodes {
          code
          name
        }
      }
    `
  });

  return {
    props: {
      languageCodes: data.getLanguageCodes,
    },
  }
}
