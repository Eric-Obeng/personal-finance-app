import { Component, computed, inject, input } from '@angular/core';
import { Transaction } from '../../models/data.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgService } from '../../services/svg/svg.service';

@Component({
  selector: 'app-recurring-bill-summary',
  imports: [CommonModule, RouterModule],
  templateUrl: './recurring-bill-summary.component.html',
  styleUrl: './recurring-bill-summary.component.scss',
})
export class RecurringBillSummaryComponent {
  svgService = inject(SvgService);

  transactions = input<Transaction[]>();

  recurringBills = computed(() =>
    this.transactions()?.filter((transaction) => transaction.recurring)
  );

  today = new Date();

  paidBills = computed(() =>
    this.recurringBills()
      ?.filter((transaction) => new Date(transaction.date) < this.today)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
  );

  upcomingBills = computed(() =>
    this.recurringBills()
      ?.filter((transaction) => new Date(transaction.date) > this.today)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
  );
  
  dueSoonBills = computed(() => {
    return this.recurringBills()
      ?.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const diffInDays = Math.ceil(
          (transactionDate.getTime() - this.today.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        return diffInDays > 0 && diffInDays <= 7;
      })
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  rightArrowIcon = this.svgService.getSvgContent(
    this.svgService.icons.find((icon) => icon.name === 'right-arrow')?.path ||
      ''
  );
}
