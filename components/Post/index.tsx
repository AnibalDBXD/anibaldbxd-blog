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

const MotionBox = motion<BoxProps>(Box);

interface IPostProps extends IPost {
  haveContent?: boolean
}

function Post({
  id,
  last_edited_time,
  properties: {
    Image, Name, JaponeseName, Tags,
  },
  haveContent = true,
}: IPostProps): JSX.Element {
  const japoneseNameColor = useColorModeValue(
    japoneseName.light, japoneseName.dark,
  );

  const { i18n: { language } } = useTranslation('common');

  if (Image === undefined) {
    return <></>;
  }

  const childrenElement = (
    <>
      <MotionBox
        display="flex"
        height="160px"
        whileHover={{ translateY: '-5px', translateX: '5px' }}
      >
        <Box position="relative">
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
          <Text as="h3" fontSize="1.5rem" fontWeight="bold" marginTop="-10px" textTransform="capitalize">{renderTitle(Name)}</Text>
          <Text color={japoneseNameColor}>{JaponeseName.rich_text[0].plain_text}</Text>
          <Text bottom="0" position="absolute">{dateToString(last_edited_time, language)}</Text>
        </Box>
      </MotionBox>
    </>
  );

  if (!haveContent) {
    return (
      <>
        {childrenElement}
      </>
    );
  }

  return (
    <SlideFade in offsetY="40px">
      <NextLink href={`/${id}`}>
        <Link _hover={{ textDecoration: 'none' }}>
          {childrenElement}
        </Link>
      </NextLink>
    </SlideFade>

  );
}

export default Post;
