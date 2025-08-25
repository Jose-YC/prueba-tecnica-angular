import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isOpen = input<boolean>(true);
}
