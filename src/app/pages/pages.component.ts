import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(
    private _settingsService: SettingsService
  ) { }

  ngOnInit() {
    this._settingsService.getSettings();
  }

}
