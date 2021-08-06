import user from '../../config/user';
import PATHS from '../../config/paths';
import { defaultLang, langs } from '../fixtures/language';
// eslint-disable-next-line import/extensions
import mockPosts from '../fixtures/post.json';
import { languages } from '../../next-i18next.config';

const { ENGLISH } = languages;

const { posts } = mockPosts;

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(PATHS.home);
  });

  it('Home page can be opened', () => {
    // Check page content
    cy.findByText(user.title.toLocaleString());

    cy.findByText(defaultLang.description);
  });

  it('In home can visit /more page', () => {
    cy.findByText(defaultLang.more).click();
    cy.url().should('contain', PATHS.more);
  });

  it('In home can visit a post', () => {
    const firstPost = posts[0];
    const firstPostName = posts[0].properties.Name.title[0].text.content;
    cy.findByText(firstPostName).click();
    cy.url().should('contain', firstPost.id);
  });

  it('In home can change theme', () => {
    // Active dark mode
    cy.findByLabelText(defaultLang.toggleThemeLabel).click();
    // Check dark mode icon and click
    cy.findByLabelText(defaultLang.moonIconLabel).click();
    // Check light mode icon and click
    cy.findByLabelText(defaultLang.sunIconLabel).click();
  });

  it('In home can change language', () => {
    cy.findByLabelText(defaultLang.settingsIconLabel).click();
    cy.findByLabelText('DownIcon').click();
    // Change to english
    cy.findByText(ENGLISH.long).click();
    cy.findByText(defaultLang.settingsSave).click();

    cy.findByText(langs[ENGLISH.short].description);
  });

  it('Can filter posts', () => {
    const firstPostTag = mockPosts.posts[0].properties.Tags.multi_select[0].name;
    const postsJaponeseName = mockPosts.posts[0].properties.JaponeseName.rich_text[0].text.content;
    cy.findByRole('radiogroup').findByLabelText(firstPostTag).click({ force: true });
    cy.findAllByText(postsJaponeseName).should('have.length', 1);
  });
});
