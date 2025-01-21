import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class TechCardComponent {
  @Input() data!: { title: string; img: string };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Data received in TechCardComponent:', this.data);
  }
}
