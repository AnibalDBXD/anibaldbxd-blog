import PATHS from '../../config/paths';
import { defaultLang } from '../fixtures/language';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(PATHS.more);
  });

  it.only('More page can be opened', () => {
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
});
