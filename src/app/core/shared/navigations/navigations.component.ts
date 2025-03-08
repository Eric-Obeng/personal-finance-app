import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgService } from '../../services/svg/svg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigations',
  imports: [MatIconModule, CommonModule],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss',
})
export class NavigationsComponent {
  svgService = inject(SvgService);

  navItems = this.svgService.icons;
  activeIcon = this.svgService.activeIcon;
}
