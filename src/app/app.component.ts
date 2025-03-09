import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavigationsComponent } from './core/shared/navigations/navigations.component';
import { DataService } from './core/services/data/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavigationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-finance-app';
}
