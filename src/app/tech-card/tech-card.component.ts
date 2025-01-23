import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-tech-card',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class TechCardComponent {
  @Input() data!: { title: string; img: string; label: string[]; video?: string};

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Data received in TechCardComponent:', this.data);
  }

  isModalOpen: boolean = false;
  selectedCardData: any = null;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  // Abrimos el modal
  openModal(data: any) {
    this.selectedCardData = data;
    this.isModalOpen = true;

    // Si hay una URL de video, la marcamos como segura
    if (data.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.video);
    }
    console.log('Modal abierto con datos:', this.selectedCardData);
  }

  // Cerramos el modal
  closeModal() {
    if (this.isModalOpen) {
      console.log('Modal cerrado con datos:', this.selectedCardData);
      this.isModalOpen = false; // Cerramos el modal
      this.selectedCardData = null; // Reseteamos los datos
    }
  }
}
