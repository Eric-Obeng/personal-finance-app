import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { BalanceService } from '../../core/services/balance/balance.service';
import { BalanceCardComponent } from '../../core/shared/balance-card/balance-card.component';
import {
  Balance,
  Budget,
  PersonalFinanceData,
  Pot,
  Transaction,
} from '../../core/models/data.model';
import { PotSummaryComponent } from '../../core/components/pot-summary/pot-summary.component';
import { PotsService } from '../../core/services/pots/pots.service';
import { DataService } from '../../core/services/data/data.service';
import { CommonModule } from '@angular/common';
import { TransactionsSummaryComponent } from '../../core/components/transactions-summary/transactions-summary.component';
import { BudgetsSummaryComponent } from '../../core/components/budgets-summary/budgets-summary.component';
import { RecurringBillSummaryComponent } from '../../core/components/recurring-bill-summary/recurring-bill-summary.component';

@Component({
  selector: 'app-overview',
  imports: [
    BalanceCardComponent,
    PotSummaryComponent,
    CommonModule,
    TransactionsSummaryComponent,
    BudgetsSummaryComponent,
    RecurringBillSummaryComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private data = signal({});
  balanceService = inject(BalanceService);
  potService = inject(PotsService);

  title = signal<string>('');
  balance = signal<Balance | null>(null);
  pots = signal<Pot[]>([]);
  transactions = signal<Transaction[]>([]);
  budgets = signal<Budget[]>([]);

  constructor() {
    firstValueFrom(this.route.data).then((data) => {
      this.title.set(data['title']);
    });

    // this.loadBalance();
    // this.loadPots();.
    this.loadAllData()
      .then((data) => {
        console.log('Data loaded', data);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }

  // async loadBalance() {
  //   try {
  //     const balance = await this.balanceService.fetchBalance();
  //     this.balance.set(balance);
  //   } catch (error) {
  //     console.error('Error fetching balance:', error);
  //     throw error;
  //   }
  // }

  // async loadPots() {
  //   try {
  //     const pots = await this.potService.fetchPots();
  //     this.pots.set(pots);
  //   } catch (error) {
  //     console.error('Error fetching pots:', error);
  //     throw error;
  //   }
  // }

  async loadAllData() {
    try {
      const data = await this.dataService.getFinanceData();
      const { balance, pots, transactions, budgets } =
        data as PersonalFinanceData;
      this.data.set(data);
      this.balance.set(balance);
      this.pots.set(pots);
      this.transactions.set(transactions);
      this.budgets.set(budgets);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
