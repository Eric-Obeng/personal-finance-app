import { Component, input } from '@angular/core';
import { Balance } from '../../models/data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance-card',
  imports: [CommonModule],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  balanceSignal = input.required<Balance | null>();
}
