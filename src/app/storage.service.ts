import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  resChosen: string;
  propertiesChosen: any[][];
  constructor() { }
}
