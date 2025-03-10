import { Routes } from '@angular/router';
import { routeTitleResolver } from './core/resolvers/routeTitle.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./features/overview/overview.component').then(
        (m) => m.OverviewComponent
      ),
    resolve: {
      title: routeTitleResolver,
    },
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(
        (m) => m.TransactionsComponent
      ),
    resolve: {
      title: routeTitleResolver,
    },
  },
  {
    path: 'budgets',
    loadComponent: () =>
      import('./features/budgets/budgets.component').then(
        (m) => m.BudgetsComponent
      ),
    resolve: {
      title: routeTitleResolver,
    },
  },
  {
    path: 'pots',
    loadComponent: () =>
      import('./features/pots/pots.component').then((m) => m.PotsComponent),
    resolve: {
      title: routeTitleResolver,
    },
  },
  {
    path: 'recurring-bills',
    loadComponent: () =>
      import('./features/recurring-bills/recurring-bills.component').then(
        (m) => m.RecurringBillsComponent
      ),
    resolve: {
      title: routeTitleResolver,
    },
  },
];
