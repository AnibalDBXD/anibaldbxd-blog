/* eslint-disable react/no-array-index-key */
import Head from 'next/head';
import ReactDOMServer from 'react-dom/server';

import { ReactNode } from 'react';
import {
  Box, HStack, Text, useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import user from '../../config/user';
import { IPost } from '../../interfaces/types';
import MyImage from '../Image';
import tagsToString from '../../utils/tagsToString';
import { japoneseName } from '../../lib/chakra/colors';
import dateToString from '../../utils/dateToString';
import Star from '../Star';

interface IProps extends IPost {
  title: ReactNode;
  children: ReactNode;
}

function ArticleWrapper({
  title,
  id,
  // eslint-disable-next-line camelcase
  last_edited_time,
  children, properties: {
    Name, Image, Tags, Stars, JaponeseName,
  },
}: IProps): JSX.Element {
  const JaponeseNameColor = useColorModeValue(
    japoneseName.light, japoneseName.dark,
  );
  const stars = new Array(Stars.number).fill(Star);
  const { i18n: { language } } = useTranslation('common');
  return (
    <>
      <Head>
        <title>
          {ReactDOMServer.renderToString(title)}
          {user.pageTitle}
        </title>
      </Head>
      <Box display="flex" flexWrap={{ base: 'wrap', md: 'nowrap' }} marginTop="34px">
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginBottom={{ base: '5%', md: 'auto' }}
          marginRight={{ base: 'auto', md: '5%' }}
          width={{ base: '100%', md: '400px' }}
        >
          <MyImage
            alt={`${Name.title[0].plain_text} poster`}
            borderRadius="10px"
            height={600}
            src={Image.url}
            width={400}
          />
          <Box width="100%">
            <Text as="h2" fontSize="2rem" fontWeight="bold" marginBottom="0">{title}</Text>
            <Text
              color={JaponeseNameColor}
              fontSize="1.1rem"
              lineHeight="35px"
              marginBottom="0.5rem"
              marginTop="0"
            >
              {JaponeseName.rich_text[0].plain_text}
            </Text>
            <Box alignItems="center" display="flex" flexWrap="wrap" gridGap="0.5rem" justifyContent="space-between" marginBottom="1rem">
              <Text color={JaponeseNameColor} fontSize="1.2rem" margin="0" textTransform="capitalize">{tagsToString(Tags)}</Text>
              <Text color={JaponeseNameColor} fontSize="1.2rem" margin="0">{dateToString(last_edited_time, language, true)}</Text>
            </Box>
            <HStack>
              {stars.map((Component, i) => <Component key={i} />)}
            </HStack>
          </Box>
        </Box>
        <Box as="article" marginTop="-34px">
          <section>{children}</section>
        </Box>
      </Box>

    </>
  );
}

export default ArticleWrapper;
