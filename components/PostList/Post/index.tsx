/* eslint-disable camelcase */
import {
  Box, Text, Link, useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { renderTitle } from '@9gustin/react-notion-render';
import { IPost } from '../types';
import MyImage from '../../Image';
import dateToString from '../../../utils/dateToString';

const Post = ({
  id,
  last_edited_time,
  properties: {
    Image, Name, JaponeseName, Tags,
  },
}: IPost): JSX.Element => {
  const japoneseNameColor = useColorModeValue('gray.500', 'gray.300');
  const tags = Tags.multi_select.map((tag) => tag.name).join(' ');
  return (
    <NextLink href={`/${id}`}>
      <Link _hover={{ textDecoration: 'none' }}>
        <Box
          display="flex"
          height="160px"
        >
          <Box position="relative">
            <MyImage
              alt={`${Name.title[0].plain_text} poster`}
              height={160}
              src={Image.url}
              width={100}
            />
            <Text
              backgroundColor="rgba(0, 0, 0, 0.4)"
              bottom="0"
              color="white"
              left="0"
              position="absolute"
              right="0"
              textAlign="center"
              textTransform="capitalize"
            >
              {tags}
            </Text>
          </Box>
          <Box marginLeft="5px" position="relative">
            <Text as="h3" fontSize="1.5rem" fontWeight="bold" marginTop="-10px">{renderTitle(Name)}</Text>
            <Text color={japoneseNameColor}>{JaponeseName.rich_text[0].plain_text}</Text>
            <Text bottom="0" position="absolute">{dateToString(last_edited_time)}</Text>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export default Post;

/*

<li key={post.id}>
            <Link href={`/${post.id}`}>
              <a>
                <h3>
                  <Link href={`/${post.id}`}>
                    {renderTitle(post.properties.Name)}
                  </Link>
                </h3>

                <p>
                  {dateToString(post.lastEditedTime)}
                </p>
              </a>
            </Link>
          </li>
*/
