import { Component } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [
    TechCardComponent,
    CommonModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  
}
