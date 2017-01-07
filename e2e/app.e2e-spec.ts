import { ForumFrontPage } from './app.po';

describe('forum-front App', function() {
  let page: ForumFrontPage;

  beforeEach(() => {
    page = new ForumFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
