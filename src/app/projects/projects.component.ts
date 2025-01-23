import { Component } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';
import { CommonModule } from '@angular/common';


const GLOBAL_MATERIALS = [
  TechCardComponent,
  CommonModule // Para usar el ngFor, ngIf, date, upperCase, lowerCase y editar estilos y clases dinamicamente
];

@Component({
  selector: 'app-projects',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  webs = [
    {title: 'La Mallorquina', description: '', img: 'assets/images/projects/mallorquina-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS"]},
    {title: 'iWatch', description: '', img: 'assets/images/projects/iwatch-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS", "VUE", "LARAVEL"]},
    {title: 'Proyecto Firebase: Respositorio de manga online', description: '', img: 'assets/images/projects/mallorquina-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS", "ANGULAR", "TAILWIND"]},
    {title: 'Pagina informativa con API', description: '', img: 'assets/images/projects/mallorquina-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS"]}
  ];

  unityProjects = [
    {title: 'Don\'t die', description: '', img: 'assets/images/projects/dont-die-frame.jpg', video: '', label: ["UNITY", "C#"]},
    {title: 'Ron y Gloria: Resacón en el Galeón Oscuro', description: '', img: 'assets/images/projects/pirata-frame.jpg', video: '', label: ["UNITY", "C#"]},
    {title: 'Monsterrat i les bèsties màgiques', description: '', img: 'assets/images/projects/montserrat-frame.jpg', video: '', label: ["UNITY", "C#"]},
  ];
}