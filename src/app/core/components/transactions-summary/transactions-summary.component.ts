import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgService } from '../../services/svg/svg.service';
import { Transaction } from '../../models/data.model';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-transactions-summary',
  imports: [RouterModule, CommonModule, TableModule],
  templateUrl: './transactions-summary.component.html',
  styleUrl: './transactions-summary.component.scss',
})
export class TransactionsSummaryComponent {
  svgService = inject(SvgService);
  transactionsSignal = input.required<Transaction[]>();

  rightArrowIcon = this.svgService.getSvgContent(
    this.svgService.icons.find((icon) => icon.name === 'right-arrow')?.path ||
      ''
  );

  transactions = computed(() => this.transactionsSignal().slice(0, 5));
}
