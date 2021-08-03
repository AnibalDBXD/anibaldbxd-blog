import user from '../../config/user';
import PATHS from '../../config/paths';
import { defaultLang, langs } from '../fixtures/language';
import { languages } from '../../next-i18next.config';

const { ENGLISH } = languages;

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
});
