import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar-menu-button',
  imports: [RouterLink],
  templateUrl: './sidebar-menu-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuButtonComponent {
   route = input<string>('');
}
