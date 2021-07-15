import React from 'react';

interface IUser {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'anime' | 'manga' | null;
  description?: React.ReactNode;
  moreDescription?: React.ReactNode;
}

const user: IUser = {
  title: 'AnibalDBXD',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo vitae viverra tincidunt. Ut ipsum odio, convallis sit amet risus nec, ultrices luctus diam.',
  moreDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo vitae viverra tincidunt. Ut ipsum odio, convallis sit amet risus nec, ultrices luctus diam.',
  theme: 'anime',
  mainTitle: 'Blog',
  pageTitle: ' | AnibalDBXD',
};

export default user;
