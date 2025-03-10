import { Component, computed, inject, input } from '@angular/core';
import { SvgService } from '../../services/svg/svg.service';
import { Pot } from '../../models/data.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pot-summary',
  imports: [CommonModule, RouterModule],
  templateUrl: './pot-summary.component.html',
  styleUrl: './pot-summary.component.scss',
})
export class PotSummaryComponent {
  svgService = inject(SvgService);
  potSignal = input.required<Pot[]>();

  rightArrowIcon = this.svgService.getSvgContent(
    this.svgService.icons.find((icon) => icon.name === 'right-arrow')?.path ||
      ''
  );
  potsIcon = this.svgService.getSvgContent(
    this.svgService.icons.find((icon) => icon.name === 'icon-pot')?.path || ''
  );

  firstFourPots = computed(() => this.potSignal().slice(0, 4));

  totalPots = computed(() => {
    return this.potSignal().reduce((acc, pot) => acc + pot.total, 0);
  });
}
