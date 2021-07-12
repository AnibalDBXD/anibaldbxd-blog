/* eslint-disable camelcase */
import Title from '@9gustin/react-notion-render/dist/types/Title';
import Text from '@9gustin/react-notion-render/dist/types/Text';

export interface IPost {
    id: string;
    last_edited_time: string;
    properties: {
      Name: Title,
      Tags: {
        id: string;
        multi_select: {
        color: string;
        id: string;
        name: string
        }[]
      },
      Image: {
        url: string
      },
      JaponeseName: {
        rich_text: Text[]
      },
      Stars: {
        number: 5
      }
    };
}
