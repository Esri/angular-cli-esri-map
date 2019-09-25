import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getApiUrl() {
    return element(by.className("api-url")).getAttribute("href") as Promise<
      string
    >;
  }
}
