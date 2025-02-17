import { Component } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [
  TechCardComponent,
  CommonModule, // Para usar el ngFor, ngIf, date, upperCase, lowerCase y editar estilos y clases dinamicamente
];

@Component({
  selector: 'app-projects',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  webs = [
    {
      title: 'La Mallorquina',
      gender: 'Desarrollo Web',
      description:
        'Tienda de restaurante basada en una tienda online real. Esta permite realizar transacciones de productos, registro de usuarios, CRUD por parte del administrador, etcétera.',
      img: 'assets/images/projects/mallorquina-frame.jpg',
      video: '',
      label: ['HTML', 'CSS', 'PHP', 'JS'],
      link: ''
    },
    {
      title: 'iWatch',
      gender: 'Desarrollo Web',
      description:
        'Plataforma de películas online. Nos permite adquirir suscripciones de varios tipos, visualizar infinidad de contenido multimedia (simulado), interactuar con la comunidad mediante las listas de reproducción públicas, etcétera.',
      img: 'assets/images/projects/iwatch-frame.jpg',
      video: '',
      label: ['HTML', 'CSS', 'PHP', 'JS', 'TS', 'VUE', 'LARAVEL'],
      link: ''
    },
    {
      title: 'E-Commerce-Website',
      gender: 'Desarrollo Web',
      description:
        'Plataforma de E-commerce de ropa que permite a los usuarios explorar un catálogo de prendas. Diseñada con una interfaz moderna y responsiva, ofrece una experiencia de compra fluida e intuitiva. Implementa tecnologías web para optimizar la navegación y la interacción del usuario.',
      img: 'assets/images/projects/ecomweb.jpg',
      video: '',
      label: ['REACT', 'HTML', 'CSS', 'JS', 'TS', 'TAILWIND'],
      link: ''
    },
    {
      title: 'API One Piece',
      gender: 'Desarrollo Web',
      description:
        'Proyecto personal: Página informativa sobre One Piece, mediante una API externa.',
      img: 'assets/images/projects/one-piece-web-frame.png',
      video: '',
      label: ['HTML', 'CSS', 'PHP', 'JS', 'ANGULAR', 'TAILWIND'],
      link: ''
    },
    {
      title: 'Biblioteca Virtual',
      gender: 'Desarrollo Web',
      description:
        'Biblioteca virtual para gestionar los libros añadidos por los usuarios, su información, sus reseñas, etc. ',
      img: '',
      video: '',
      label: ['LARAVEL', 'ANGULAR', 'HTML', 'CSS', 'PHP', 'TS'],
      link: ''
    },
  ];

  unityProjects = [
    {
      title: "Don't die",
      gender: 'Desarrollo de Videojuegos',
      description: 'Explora desafiantes niveles de plataformas donde tu misión es encontrar la llave que abre la puerta al siguiente reto. Salta, esquiva peligros y demuestra tu habilidad para avanzar. ¡Solo los más ágiles lo lograrán!',
      img: 'assets/images/projects/dont-die-frame.jpg',
      video: 'https://www.youtube.com/embed/ZvlVs0wS7t0',
      label: ['UNITY', 'C#'],
    },
    {
      title: 'Ron y Gloria: Resacón en el Galeón Oscuro',
      gender: 'Desarrollo de Videojuegos',
      description:
        'Eres un valiente pirata en busca de tu nave perdida, el legendario Galeón Oscuro. Supera trampas, derrota enemigos y demuestra tu astucia para recuperarlo. ¡La aventura te espera en cada puerto!',
      img: 'assets/images/projects/pirata-frame.jpg',
      video: 'https://youtube.com/embed/zOxvEkGDbyg',
      label: ['UNITY', 'C#'],
    },
    {
      title: 'Monsterrat i les bèsties màgiques',
      gender: 'Desarrollo de Videojuegos',
      description:
        'Oleguer, un joven monaguillo, ha liberado por error bestias mágicas de un antiguo libro en la capilla de Montserrat. Ahora, deberá atraparlas de nuevo antes de que el caos se desate. ¡Fe, ingenio y valentía serán clave en su misión!',
      img: 'assets/images/projects/montserrat-frame.jpg',
      video: 'https://youtube.com/embed/jSYSTif1hHM',
      label: ['UNITY', 'C#'],
    },
  ];
}
