import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  private classNameWorking: string = 'working';

  constructor(
    private _settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.setCheck();
  }

  changeTheme(theme: string, link: any) {
    this._settingsService.applyTheme(theme);
    this.applyCheck(link);
  }

  // @TODO: This could change, it's uggly!
  applyCheck(link: any) {
    const links: any = document.getElementsByClassName('selector');
    for (const ref of links) {
      ref.classList.remove(this.classNameWorking);
    }
    link.classList.add(this.classNameWorking);
  }

  // @TODO: This could change, it's uggly!
  setCheck() {
    const links: any = document.getElementsByClassName('selector');
    const theme = this._settingsService.settings.theme;
    for (const ref of links) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add(this.classNameWorking);
        break;
      }
    }
  }

}
