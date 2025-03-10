import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PersonalFinanceData } from '../../models/data.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl = 'assets/data.json';

  http = inject(HttpClient);

  async getFinanceData(): Promise<PersonalFinanceData> {
    const data$ = this.http.get<PersonalFinanceData>(this.apiUrl);
    return firstValueFrom(data$);
  }
}
