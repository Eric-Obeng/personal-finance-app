import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgService } from '../../services/svg/svg.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-navigations',
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss',
})
export class NavigationsComponent {
  svgService = inject(SvgService);
  sanitizer = inject(DomSanitizer);

  navItems = this.svgService.navigationIcons;
  activeIcon = this.svgService.activeIcon;

  getSvgContent(path:string): SafeHtml {
    return this.svgService.getSvgContent(path)
  }
}
