import { Assing1componentPage } from './app.po';

describe('assing1component App', () => {
  let page: Assing1componentPage;

  beforeEach(() => {
    page = new Assing1componentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
