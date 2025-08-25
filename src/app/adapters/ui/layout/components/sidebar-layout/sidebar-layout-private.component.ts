import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SidebarComponent, SidebarHeaderComponent, SidebarContentComponent, SidebarGroupComponent, SidebarGroupLabelComponent, SidebarGroupContentComponent, SidebarMenuComponent, SidebarMenuButtonComponent, SidebarMenuItemComponent } from "../../../components/sidebar";

@Component({
  selector: 'app-sidebar-layout',
  imports: [SidebarComponent, SidebarHeaderComponent, SidebarContentComponent, SidebarGroupComponent, SidebarGroupLabelComponent, SidebarGroupContentComponent, SidebarMenuComponent, SidebarMenuButtonComponent, SidebarMenuItemComponent],
  templateUrl: './sidebar-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent {
  isOpen = input<boolean>(true);
}
