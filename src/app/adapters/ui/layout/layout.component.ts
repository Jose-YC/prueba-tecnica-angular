import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SidebarLayoutComponent } from "./components";
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./components/header-layout/header-layout.component";
import { FooterLayoutComponent } from "./components/footer-layout/footer-layout.component";

@Component({
  selector: 'private-layout',
  imports: [RouterOutlet, SidebarLayoutComponent, HeaderLayoutComponent, FooterLayoutComponent],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }
}
