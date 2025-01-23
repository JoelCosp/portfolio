import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-tech-card',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class TechCardComponent {
  @Input() data!: { title: string; img: string; label: string[]};

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Data received in TechCardComponent:', this.data);
  }
}
