import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  settings: Settings = {
    themeURL: 'assets/css/colors/default.css',
    theme: 'default'
  };

  private item: string = 'settings';

  constructor() { }

  setSettings() {
    localStorage.setItem(this.item, JSON.stringify(this.settings));
  }

  getSettings() {
    if (localStorage.getItem(this.item)) {
      this.settings = JSON.parse(localStorage.getItem(this.item));
    }
    this.applyTheme(this.settings.theme);
  }

  applyTheme(theme: string) {
    const path = `assets/css/colors/${theme}.css`;
    document.getElementById('theme').setAttribute('href', path);

    this.settings.theme = theme;
    this.settings.themeURL = path;
    this.setSettings();
  }

}

interface Settings {
  themeURL: string;
  theme: string;
}
