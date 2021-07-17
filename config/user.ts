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
  pageUrl: 'anibaldbxd.cf',
  metaDescription: {
    en: 'Reviews of series, anime and movies.',
    es: 'Reseñas de series, animes y peliculas.',
  },
};

export default user;
