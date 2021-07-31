import user from '../../config/user';
import PATHS from '../../config/paths';
import { defaultLang } from '../fixtures/language';

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

  it('In home can visit the first post', () => {
    cy.findAllByRole('list').findAllByRole('link').first().click();
    cy.url().should('not.equal', `http://localhost:3000${PATHS.home}`);
  });
});
