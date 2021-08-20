import PATHS from '../../config/paths';
import user from '../../config/user';
import { defaultLang } from '../fixtures/language';
// eslint-disable-next-line import/extensions
import mockPosts from '../fixtures/post.json';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(PATHS.more);
  });

  it('More page can be opened', () => {
    // Check page content
    cy.findByText(defaultLang.moreDescription);
  });

  it('In More can change theme', () => {
    // Active dark mode
    cy.findByLabelText(defaultLang.toggleThemeLabel).click();
    // Check dark mode icon and click
    cy.findByLabelText(defaultLang.moonIconLabel).click();
    // Check light mode icon and click
    cy.findByLabelText(defaultLang.sunIconLabel).click();
  });

  it('Can filter posts', () => {
    const firstPostTag = mockPosts.posts[0].properties.Tags.multi_select[0].name;
    const postsJaponeseName = mockPosts.posts[0].properties.JaponeseName.rich_text[0].text.content;
    cy.findByRole('radiogroup').findByLabelText(firstPostTag).click({ force: true });
    cy.findAllByText(postsJaponeseName).should('have.length', 1);
  });
  it('Go back to home', () => {
    cy.findByText(user.title.toLocaleString()).click();
    cy.url().should('equal', `http://localhost:3000${PATHS.home}`);
  });
});
