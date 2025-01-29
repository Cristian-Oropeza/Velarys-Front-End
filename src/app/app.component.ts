import { Component, OnInit } from '@angular/core';
import { InactivityService } from './services/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'velarys';
  constructor(private inactivityService: InactivityService) {}

  ngOnInit(): void {
    // El servicio de inactividad se inicializa automáticamente
  }
}
