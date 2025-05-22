import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  repos = [
    {
      nombre: 'Repositorio Java',
      url: 'https://github.com/MelissaLinanGonzalez/Java-Repository',
      imagen: 'assets/java programming.png'
    },
    {
      nombre: 'Repositorio BBDD',
      url: 'https://github.com/MelissaLinanGonzalez/Bases-de-Datos',
      imagen: 'assets/bbdd.png'
    },
    {
      nombre: 'Repositorio Sass',
      url: 'https://github.com/MelissaLinanGonzalez/Aprendiendo-Sass',
      imagen: 'assets/sass.png'
    }
  ];

  indiceActual = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.repos.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.repos.length) % this.repos.length;
  }
}

