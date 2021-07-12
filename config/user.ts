import React from 'react';

interface IUser {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'anime' | 'manga' | null;
  description?: React.ReactNode;
}

const user: IUser = {
  title: 'AnibalDBXD',
  description:
    'lreom imp´sum loremeerewoirneor43t34534583453849',
  theme: 'anime',
  mainTitle: 'Blog',
  pageTitle: ' | AnibalDBXD',
};

export default user;
