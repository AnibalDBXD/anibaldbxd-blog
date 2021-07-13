import Head from 'next/head';
import ReactDOMServer from 'react-dom/server';

import { ReactNode } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import user from '../../config/user';
import { IPost } from '../PostList/types';
import MyImage from '../Image';
import tagsToString from '../../utils/tagsToString';
import { japoneseName } from '../../chakra/colors';

interface IProps extends IPost {
  title: ReactNode;
  children: ReactNode;
}

function ArticleWrapper({
  title,
  children, properties: { Name, Image, Tags },
}: IProps): JSX.Element {
  const JaponeseNameColor = useColorModeValue(
    japoneseName.light, japoneseName.dark,
  );
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
          <Box>
            <Text>{title}</Text>
            <Text color={JaponeseNameColor} textTransform="capitalize">{tagsToString(Tags)}</Text>
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
