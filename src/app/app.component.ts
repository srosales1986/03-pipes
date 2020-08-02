import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Sebastián';
  nombre2: string = 'SebsTiaN roSalES';
  pass: string = 'contrasena falsa';
  ocultar: boolean = true;
  PI: number = Math.PI;
  porcentaje: number = 0.123;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'fr';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Async completado.');
    }, 3500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Falsa',
      casa: 123
    }
  }
}
