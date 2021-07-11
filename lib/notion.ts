import { Client } from '@notionhq/client';
import { PagesRetrieveResponse } from '@notionhq/client/build/src/api-endpoints';
import { Block, Page } from '@notionhq/client/build/src/api-types';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId): Promise<Page[]> => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId): Promise<PagesRetrieveResponse> => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId): Promise<Block[]> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};
