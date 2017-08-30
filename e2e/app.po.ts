import { browser, element, by } from 'protractor';

export class Material2SamplePage {
  navigateTo() {
    browser.waitForAngularEnabled(false) // do not wait for angular async
    return browser.get('/')
  }

  getToolbarText() {
    // return 'Angular Material2 Example App'
    return element(by.name('toolbar-title')).getText()
  }

  getTitle() {
    return browser.getTitle()
  }
}
