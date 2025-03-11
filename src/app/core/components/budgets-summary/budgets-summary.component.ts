import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgService } from '../../services/svg/svg.service';
import { ChartModule } from 'primeng/chart';
import { Budget } from '../../models/data.model';

@Component({
  selector: 'app-budgets-summary',
  imports: [RouterModule, CommonModule, ChartModule],
  templateUrl: './budgets-summary.component.html',
  styleUrl: './budgets-summary.component.scss',
})
export class BudgetsSummaryComponent {
  budgetSignal = input<Budget[]>();

  private label = computed(() =>
    this.budgetSignal()?.map((budget) => budget.category)
  );
  private data = computed(() =>
    this.budgetSignal()?.map((budget) => budget.maximum)
  );
  private backgroundColors = computed(() =>
    this.budgetSignal()?.map((budget) => budget.theme)
  );

  totalBudget = computed(() =>
    this.budgetSignal()
      ?.map((budget) => budget.maximum)
      .reduce((acc, budget) => acc + budget, 0)
  );

  chartData = computed(() => ({
    labels: this.label(),
    datasets: [
      {
        data: this.data(),
        backgroundColor: this.backgroundColors(),
        hoverBackgroundColor: ['#145D58', '#6ABDE8', '#C9A78C', '#525053'],
        borderWidth: 0,
      },
    ],
  }));

  chartOptions = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  svgService = inject(SvgService);

  rightArrowIcon = this.svgService.getSvgContent(
    this.svgService.icons.find((icon) => icon.name === 'right-arrow')?.path ||
      ''
  );
}
