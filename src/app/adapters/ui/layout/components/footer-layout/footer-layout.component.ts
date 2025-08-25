import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer-layout',
  imports: [],
  templateUrl: './footer-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent {
  currentYear = signal(new Date().getFullYear());
}
