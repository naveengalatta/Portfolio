import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly darkMode = signal(true);

  readonly isDark = this.darkMode.asReadonly();

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.darkMode.set(saved === 'dark');
    }
    this.applyTheme();
  }

  toggle(): void {
    this.darkMode.set(!this.darkMode());
    this.applyTheme();
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
  }
}
