import { MoshIntegrationtestsPage } from './app.po';

describe('mosh-integrationtests App', () => {
  let page: MoshIntegrationtestsPage;

  beforeEach(() => {
    page = new MoshIntegrationtestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
