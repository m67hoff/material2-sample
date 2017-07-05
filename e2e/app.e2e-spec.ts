import { Material2SamplePage } from './app.po';

describe('material2-sample App', () => {
  let page: Material2SamplePage;

  beforeEach(() => {
    page = new Material2SamplePage();
  });

  it('should have title: "material2-sample" ', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('material2-sample');
  });

  it('should display toolbar text: "Angular Material2 Example App" ', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toEqual('Angular Material2 Example App');
  });

});
