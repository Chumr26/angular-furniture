import { Component, ViewEncapsulation } from '@angular/core';
import { DesktopComponent } from "./desktop/desktop.component";
import { MobileComponent } from "./mobile/mobile.component";

@Component({
  selector: 'app-header',
  imports: [DesktopComponent, MobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None // Disable encapsulation

})
export class HeaderComponent {

}
