import { NgModule, Component } from '@angular/core';
import {Languages, StorageService} from "./storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdk-app';
  languages = Languages;
  keys: Languages[];
  test = 1;
  constructor(public storage: StorageService) {
    this.keys = Object.values(this.languages).filter(k => !isNaN(Number(k))) as Languages[];
  }
}
