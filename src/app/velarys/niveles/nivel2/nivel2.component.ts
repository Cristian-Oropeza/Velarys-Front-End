import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel2',
  templateUrl: './nivel2.component.html',
  styleUrls: ['./nivel2.component.css']
})
export class Nivel2Component {

  constructor(private router: Router) {}

  volver() {
    // Volver a la página anterior usando la History API
    window.history.back(); // Regresa a la página anterior
  }




}


