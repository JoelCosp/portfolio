import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  imports: [],
  templateUrl: './gradient-button.component.html',
  styleUrl: './gradient-button.component.css'
})
export class GradientButtonComponent {
  @Input() label: string = "Descargar CV";

  downloadPdf(): void {
    const link = document.createElement('a'); // Crear un enlace temporal
    link.href = 'src\assets\images\documents'; // Ruta del archivo PDF
    link.download = 'CV_CAST2025.pdf'; // Nombre del archivo al descargarlo
    link.click(); // Simula un clic en el enlace
  }
}
