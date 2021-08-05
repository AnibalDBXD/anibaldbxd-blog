import PATHS from '../../config/paths';
// eslint-disable-next-line import/extensions
import mockPosts from '../fixtures/post.json';

const { page, blocks } = mockPosts.page;

describe('Post page', () => {
  beforeEach(() => {
    cy.visit(`/${page.id}`);
  });

  it('Post page can be opened', () => {
    // Check page content
    cy.findByText(page.properties.Name.title[0].text.content);
    cy.findByText(blocks[0].paragraph.text[0].text.content);
  });

  it('Go back to home', () => {
    cy.findByLabelText('go back').click();
    cy.url().should('equal', `http://localhost:3000${PATHS.home}`);
  });
});
