import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subject, interval, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTimeout = 0.5 * 60 * 1000; 
  private inactivityTimer$: Subscription = new Subscription(); // Inicialización
  private userActivity$ = new Subject<void>();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.resetTimer();
      this.setupActivityListeners();
    }
  }

  private setupActivityListeners(): void {
    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keypress', () => this.resetTimer());
    window.addEventListener('scroll', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
  }

  private resetTimer(): void {
    if (this.inactivityTimer$) {
      this.inactivityTimer$.unsubscribe();
    }

    this.inactivityTimer$ = interval(1000)
      .pipe(takeUntil(this.userActivity$))
      .subscribe(() => {
        this.inactivityTimeout -= 1000;
        if (this.inactivityTimeout <= 0) {
          this.logout();
        }
      });
  }

  private logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/inicio']);
    this.userActivity$.next();
  }
}