import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { BalanceService } from '../../core/services/balance/balance.service';
import { BalanceCardComponent } from "../../core/shared/balance-card/balance-card.component";
import { Balance } from '../../core/models/data.model';

@Component({
  selector: 'app-overview',
  imports: [BalanceCardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  private route = inject(ActivatedRoute);
  balanceService = inject(BalanceService);

  title = signal<string>('');
  balance = signal<Balance | null>(null);

  constructor() {
    firstValueFrom(this.route.data).then((data) => {
      this.title.set(data['title']);
    });

    this.loadBalance()
  }

  async loadBalance() {
    const balance = await this.balanceService.fetchBalance();
    this.balance.set(balance);
  }
}
