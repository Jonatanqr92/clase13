import { Component } from '@angular/core';
//decorador (slector,templateurl,styleurls)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public name: string;
 public lastname: string;


 public lista: Array<string>;

 constructor(){
 this.lista = [];
}

 public mostrar(): void {
   const item = `Nombre: ${this.name} - Apellido: ${this.lastname}`;
   alert (item);
this.lista.push(item);
 }
}
