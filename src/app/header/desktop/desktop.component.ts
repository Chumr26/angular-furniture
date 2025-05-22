import { Component } from '@angular/core';
import { TopComponent } from "./top/top.component";
import { MiddleComponent } from "./middle/middle.component";
import { BottomComponent } from "./bottom/bottom.component";

@Component({
  selector: 'desktop',
  imports: [TopComponent, MiddleComponent, BottomComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {

}
