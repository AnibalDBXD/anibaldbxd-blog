import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getDatabase } from '../../lib/notion';
import { DATABASE_LANGUAGES } from '..';
import user from '../../config/user';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const databases = await Promise.all(
    ctx.locales.map((locale) => getDatabase(DATABASE_LANGUAGES[locale])),
  );
  const fields = databases.map(
    // eslint-disable-next-line camelcase
    (database) => database.map(({ id, last_edited_time }) =>
      ({ loc: `${user.pageUrl}/${id}`, lastmod: last_edited_time })),
  ).flat();

  return getServerSideSitemap(ctx, fields);
};
// Default export to prevent next.js errors
const Named = (): JSX.Element => <div />;
export default Named;
