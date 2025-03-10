import { inject, Injectable, signal } from '@angular/core';
import { DataService } from '../data/data.service';
import { Pot } from '../../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class PotsService {
  dataService = inject(DataService);

  private potsSignals = signal<Pot[] | null>(null);

  getPots() {
    return this.potsSignals.asReadonly();
  }

  async fetchPots(): Promise<Pot[]> {
    try {
      const data = await this.dataService.getFinanceData();
      this.potsSignals.set(data.pots);
      return data.pots;
    } catch (error) {
      console.error('Error fetching pots:', error);
      throw error;
    }
  }
}
