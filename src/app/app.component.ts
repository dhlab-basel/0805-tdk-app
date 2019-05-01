import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tdk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _domSanitizer: DomSanitizer,
              private _matIconRegistry: MatIconRegistry
            ) {

      // kuirl icon with text
      this._matIconRegistry.addSvgIcon(
          'tdk-logo',
          this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/tdk-logo.svg')
      );

  }

}
