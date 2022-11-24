import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'book-outline',
      name: 'Asignaturas',
      redirecTo:'/action-sheet',
    },
    {
      icon: 'albums-outline',
      name: 'Información',
      redirecTo:'/card',
    },
    {
      icon: 'walk-outline',
      name: 'In',
      redirecTo:'/inputs',
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'diamond-outline',
      name: 'Comentarios',
      redirecTo:'/comentarios',
    }, 
    {
      icon: 'person-outline',
      name: 'Mascotas',
      redirecTo:'/datos',
    },
  ];




}
