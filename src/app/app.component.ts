import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Track', url: '/Track', icon: 'swap-vertical' },
    { title: 'Basic', url: '/Basic', icon: 'calendar-clear' },
    { title: 'Daily Track', url: '/daily-track', icon: 'calendar' },
  ];
  constructor() {}
}
