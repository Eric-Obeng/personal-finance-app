import { inject, Injectable, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SvgIcon } from '../../models/svg.model';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  sanitizer = inject(DomSanitizer);

  private svgList: SvgIcon[] = [
    { name: 'overview', path: 'assets/images/icon-nav-overview.svg' },
    { name: 'transactions', path: 'assets/images/icon-nav-transactions.svg' },
    { name: 'budgets', path: 'assets/images/icon-nav-budgets.svg' },
    { name: 'pots', path: 'assets/images/icon-nav-pots.svg' },
    {
      name: 'recurring-bills',
      path: 'assets/images/icon-nav-recurring-bills.svg',
    },
    {
      name: 'right-arrow',
      path: 'assets/images/icon-caret-right.svg',
    },
  ];

  activeIcon = signal<string | null>(
    localStorage.getItem('activeIcon') || 'overview'
  );

  get icons(): SvgIcon[] {
    return this.svgList;
  }

  get navigationIcons(): SvgIcon[] {
    return this.svgList.slice(0, 5);
  }

  setActiveIcon(name: string): void {
    this.activeIcon.set(name);
    localStorage.setItem('activeIcon', name);
  }

  getActiveIcon(): string | null {
    return this.activeIcon();
  }

  getSvgContent(path: string): SafeHtml {
    const svgContent = `<img src="${path}" alt="icon">`;
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
