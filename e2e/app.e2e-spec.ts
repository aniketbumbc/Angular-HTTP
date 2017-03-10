import { AngularHTTPPage } from './app.po';

describe('angular-http App', () => {
  let page: AngularHTTPPage;

  beforeEach(() => {
    page = new AngularHTTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
