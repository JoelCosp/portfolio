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
    {title: 'La Mallorquina', description: '', img: 'assets/images/projects/iwatch-frame.jpg', video: ''},
    {title: 'iWatch', description: '', img: 'assets/images/css.png', video: ''},
    {title: 'Proyecto Firebase: Respositorio de manga online', description: '', img: 'assets/images/js.png', video: ''},
    {title: 'Pagina informativa con API', description: '', img: 'assets/images/js.png', video: ''}
  ];

  unityProjects = [
    {title: 'Dont\'t die', description: '', img: 'assets/images/angular.png', video: ''},
    {title: 'Ron y Gloria: Resacón en la perla negra', description: '', img: 'assets/images/laravel.png', video: ''},
    {title: 'Monsterrat i les bèsties màgiques', description: '', img: 'assets/images/vue.png', video: ''},
  ];
}
