import user from '../../config/user';

describe('Home page', () => {
  it('Home page can be opened', () => {
    cy.visit('/');
    cy.contains(user.title.toLocaleString());
  });
});
