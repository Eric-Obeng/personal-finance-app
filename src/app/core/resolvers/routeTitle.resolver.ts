import { signal } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

const titleSignal = signal<string>('');

export const routeTitleResolver: ResolveFn<Promise<string>> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const title = formatTitle(route.routeConfig?.path || '');
  titleSignal.set(title);
  return Promise.resolve(title);
};

function formatTitle(path: string): string {
  return path
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
