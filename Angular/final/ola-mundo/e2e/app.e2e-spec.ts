import { OlaMundoPage } from './app.po';

describe('ola-mundo App', () => {
  let page: OlaMundoPage;

  beforeEach(() => {
    page = new OlaMundoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Olá mundo!');
  });
});
