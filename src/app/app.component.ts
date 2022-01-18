import { Component } from '@angular/core';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nav-item-bug';

  readonly correctExample: DrawerNavItem[] = [
    {
      title: 'Node 1 (working correctly)',
      items: [
        {
          title: 'Node 1.1',
        },
        {
          title: 'Node 1.2',
          items: [
            {
              title: 'Node 1.2.1',
            },
            {
              title: 'Node 1.2.2',
            },
          ],
        },
      ],
    },
  ];

  loadedAfter4 = false;
  loadedAfter3 = false;
  loadedAfter2 = false;
  incorrectExample$ = new BehaviorSubject<DrawerNavItem[]>([]);

  ngOnInit() {
    this.incorrectExample$.next(this.correctExample.map(n => ({...n, title: 'Node 1 (not working correctly)'})));
    setTimeout(() => {
      this.loadedAfter4 = true;
    }, 4000);
    setTimeout(() => {
      this.loadedAfter3 = true;
    }, 3000);
    setTimeout(() => {
      this.loadedAfter2 = true;
    }, 2000);
  }

  ngAfterViewInit() {
  }
}
