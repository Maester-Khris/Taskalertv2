import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task alert Material';

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
