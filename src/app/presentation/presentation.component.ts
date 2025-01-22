import { Component, OnInit } from '@angular/core';
import { GradientButtonComponent } from '../gradient-button/gradient-button.component';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-presentation',
  imports: [
    GradientButtonComponent
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 90,
      deleteSpeed: 80,
      typeColor: '#ff014f'
    })
    
    writer
      .type('desarrollador Full-Stack')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(24)
      .type('desarrollador de Videojuegos')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(28)
      .type('diseñador gráfico')
      .rest(500)
      .clear()
      .start()

      /* 
        writer
      .type('desarrollador Full-Stack')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(4)
      .type('edit')
      .rest(500)
      .remove(4)
      .type('desarrollador de Videojuegos')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('diseñador gráfico')
      .rest(500)
      .clear()
      .start()
      */
  }
}
