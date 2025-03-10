import { inject, Injectable, signal } from '@angular/core';
import { Balance } from '../../models/data.model';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private balanceSignal = signal<Balance | null>(null);

  dataService = inject(DataService);

  getBalance() {
    return this.balanceSignal.asReadonly();
  }

  async fetchBalance(): Promise<Balance> {
    try {
      const data = await this.dataService.getFinanceData();
      this.balanceSignal.set(data.balance);
      return data.balance;
    } catch (error) {
      console.error('Error fetching balance:', error);
      throw error;
    }
  }

  async updateBalance(newBalance: Balance): Promise<void> {
    this.balanceSignal.set(newBalance);
  }
}
