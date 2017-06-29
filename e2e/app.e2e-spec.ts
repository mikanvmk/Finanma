import { FinanmaPage } from './app.po';

describe('finanma App', function() {
  let page: FinanmaPage;

  beforeEach(() => {
    page = new FinanmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
