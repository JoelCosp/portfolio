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
    {title: 'La Mallorquina', gender: 'Desarrollo Web', description: 'Tienda de restaurante basada en una tienda online real. Esta permite realizar transacciones de productos, registro de usuarios, CRUD por parte del administrador, etcétera.', img: 'assets/images/projects/mallorquina-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS"]},
    {title: 'iWatch', gender: 'Desarrollo Web', description: 'Plataforma de películas online. Nos permite adquirir suscripciones de varios tipos, visualizar infinidad de contenido multimedia (simulado), interactuar con la comunidad mediante las listas de reproducción públicas, etcétera.', img: 'assets/images/projects/iwatch-frame.jpg', video: '', label: ["HTML", "CSS", "PHP", "JS", "TS", "VUE", "LARAVEL"]},
    {title: 'API One Piece', gender: 'Desarrollo Web', description: 'Proyecto personal: Página informativa sobre One Piece, mediante una API externa.', img: 'assets/images/projects/one-piece-web-frame.png', video: '', label: ["HTML", "CSS", "PHP", "JS", "ANGULAR", "TAILWIND"]},
    {title: 'Biblioteca Virtual', gender: 'Desarrollo Web', description: 'Biblioteca virtual para gestionar los libros añadidos por los usuarios, su información, sus reseñas, etc. ', img: '', video: '', label: ["LARAVEL", "ANGULAR", "HTML", "CSS", "PHP", "TS"]}
  ];

  unityProjects = [
    {title: 'Don\'t die', gender: 'Desarrollo de Videojuegos', description: 'Proyecto académico que simula una tienda de restaurante basado en una tienda online real. Esta permite realizar transacciones de productos, registro de usuarios, CRUD por parte del administrador, etcétera.', img: 'assets/images/projects/dont-die-frame.jpg', video: 'https://www.youtube.com/embed/ZvlVs0wS7t0', label: ["UNITY", "C#"]},
    {title: 'Ron y Gloria: Resacón en el Galeón Oscuro', gender: 'Desarrollo de Videojuegos', description: 'Proyecto académico que simula una tienda de restaurante basado en una tienda online real. Esta permite realizar transacciones de productos, registro de usuarios, CRUD por parte del administrador, etcétera.', img: 'assets/images/projects/pirata-frame.jpg', video: 'https://youtu.be/jSYSTif1hHM', label: ["UNITY", "C#"]},
    {title: 'Monsterrat i les bèsties màgiques', gender: 'Desarrollo de Videojuegos', description: 'Proyecto académico que simula una tienda de restaurante basado en una tienda online real. Esta permite realizar transacciones de productos, registro de usuarios, CRUD por parte del administrador, etcétera.', img: 'assets/images/projects/montserrat-frame.jpg', video: 'https://youtube.com/embed/jSYSTif1hHM', label: ["UNITY", "C#"]},
  ];
}