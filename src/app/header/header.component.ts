import { Component } from '@angular/core';
import { HeaderGButtonComponent } from '../header-g-button/header-g-button.component';

const GLOBAL_MATERIALS = [HeaderGButtonComponent];

@Component({
  selector: 'app-header',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
