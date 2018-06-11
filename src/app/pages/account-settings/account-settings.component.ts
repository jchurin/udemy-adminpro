import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document
  ) { }

  ngOnInit() {
  }

  changeTheme(theme: string, link: any) {
    const path = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', path);
    this.applyCheck(link);
  }

  applyCheck(link: any) {
    const links: any = document.getElementsByClassName('selector');
    for (const ref of links) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
