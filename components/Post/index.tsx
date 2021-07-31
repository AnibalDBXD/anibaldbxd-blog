/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import {
  Box,
  Text,
  Link,
  useColorModeValue,
  SlideFade,
  BoxProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { renderTitle } from '@9gustin/react-notion-render';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { IPost } from '../../interfaces/types';
import MyImage from '../Image';
import dateToString from '../../utils/dateToString';
import tagsToString from '../../utils/tagsToString';
import { japoneseName, darken } from '../../lib/chakra/colors';
import StarList from '../StarList';

const MotionBox = motion<BoxProps>(Box);

interface IPostProps extends IPost {
  haveContent?: boolean
}

function Post({
  id,
  last_edited_time,
  properties: {
    Image, Name, JaponeseName, Tags, Stars,
  },
  haveContent = true,
}: IPostProps): JSX.Element {
  const japoneseNameColor = useColorModeValue(
    japoneseName.light, japoneseName.dark,
  );

  const { i18n: { language } } = useTranslation('common');

  const childrenElement = (
    <MotionBox
      as="li"
      display="flex"
      height="160px"
      whileHover={{ translateY: '-5px', translateX: '5px' }}
    >
      {!haveContent && (
        <Box position="relative">
          <StarList direction="column" left="-20px" position="absolute" stars={Stars.number} />
        </Box>
      ) }
      <Box height="160px" minWidth="100px" position="relative">
        <MyImage
          alt={`${Name.title[0].plain_text} poster`}
          height={160}
          src={Image.url}
          width={100}
        />
        <Text
          backgroundColor={darken.all}
          bottom="0"
          color="white"
          left="0"
          position="absolute"
          right="0"
          textAlign="center"
          textTransform="capitalize"
        >
          {tagsToString(Tags)}
        </Text>
      </Box>
      <Box marginLeft="5px" position="relative">
        <Text as="h3" fontSize={{ sm: '1.3rem', md: '1.2rem', lg: '1.3rem' }} fontWeight="bold" marginTop="-10px" textTransform="capitalize">{renderTitle(Name)}</Text>
        <Text color={japoneseNameColor}>{JaponeseName.rich_text[0].plain_text}</Text>
        <Text bottom="0" position="absolute">{dateToString(last_edited_time, language)}</Text>
      </Box>
    </MotionBox>
  );

  if (!haveContent) {
    return (
      <>
        { childrenElement }
      </>
    );
  }

  return (
    <NextLink href={`/${id}`} passHref>
      <Link _focus={{ boxShadow: 'none' }} _hover={{ textDecoration: 'none' }}>
        <SlideFade in offsetY="40px">
          {childrenElement}
        </SlideFade>
      </Link>
    </NextLink>

  );
}

export default Post;
