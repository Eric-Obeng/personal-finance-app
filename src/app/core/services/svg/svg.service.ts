import { inject, Injectable, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SvgIcon } from '../../models/svg.model';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  private svgList: SvgIcon[] = [
    { name: 'overview', path: 'assets/images/icon-nav-overview.svg' },
    { name: 'transactions', path: 'assets/images/icon-nav-transactions.svg' },
    { name: 'budgets', path: 'assets/images/icon-nav-budgets.svg' },
    { name: 'pots', path: 'assets/images/icon-nav-pots.svg' },
    { name: 'recurring-bills', path: 'assets/images/icon-nav-recurring-bills.svg' },
  ];

  activeIcon = signal<string | null>(
    localStorage.getItem('activeIcon') || 'overview'
  );

  get icons(): SvgIcon[] {
    return this.svgList;
  }

  setActiveIcon(name: string): void {
    this.activeIcon.set(name);
    localStorage.setItem('activeIcon', name);
  }

  getActiveIcon(): string | null {
    return this.activeIcon();
  }
}
