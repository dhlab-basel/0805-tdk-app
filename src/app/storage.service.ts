import { Injectable } from '@angular/core';
export enum Languages {
  English,
  Deutsch
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  resChosen: string;
  propertiesChosen: any[][];
  currentQuery: string;
  selectedLanguage: Languages = Languages.Deutsch;
  constructor() { }
}
