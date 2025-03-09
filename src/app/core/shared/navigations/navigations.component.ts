import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgService } from '../../services/svg/svg.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigations',
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss',
})
export class NavigationsComponent {
  svgService = inject(SvgService);

  navItems = this.svgService.icons;
  activeIcon = this.svgService.activeIcon;
}
