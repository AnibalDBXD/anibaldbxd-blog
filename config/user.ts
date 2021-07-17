import React from 'react';

interface IUser {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  author: string;
  keywords: string[];
  metaDescription: {
    en: string;
    es: string;
  },
  pageUrl: string;
}

const user: IUser = {
  title: 'AnibalDBXD',
  mainTitle: 'Blog',
  pageTitle: ' | AnibalDBXD',
  keywords: ['Manga', 'Anime'],
  author: 'Anibal Olivares',
  pageUrl: '',
  metaDescription: {
    en: '',
    es: '',
  },
};

export default user;
