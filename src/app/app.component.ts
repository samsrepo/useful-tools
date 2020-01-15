import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Property to store all of our available Font Awesome icons
  // E.g. icons.faCoffee
  icons = icons;
}
