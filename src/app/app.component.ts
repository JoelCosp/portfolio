import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

import { HeaderComponent } from './header/header.component';  // Importar el Header
import { PresentationComponent } from './presentation/presentation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { StudiesComponent } from './studies/studies.component';
import { TechCardComponent } from './tech-card/tech-card.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    PresentationComponent,
    TechnologiesComponent,
    ExperienceComponent,
    LanguagesComponent,
    ProjectsComponent,
    FooterComponent,
    StudiesComponent,
    TechCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-cv';

  ngOnInit(): void {
    initFlowbite();
    // Para añadir los componentes en dark mode
    document.documentElement.classList.add("dark");
  }
}
