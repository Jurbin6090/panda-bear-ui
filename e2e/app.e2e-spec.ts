import { PandaBearUiPage } from './app.po';

describe('panda-bear-ui App', function() {
  let page: PandaBearUiPage;

  beforeEach(() => {
    page = new PandaBearUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
