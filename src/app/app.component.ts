import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'generic-site';
  isAdminPage$: Observable<boolean> = new Observable<boolean>();

  constructor(private _router: Router) {}
  
  ngOnInit() {
    this.isAdminPage$ = this._router.events.pipe(
      filter((evt: any) => {
        return evt instanceof NavigationEnd;
      }),
      map((evt: NavigationEnd) => {
        return evt.url.includes('/admin');
      }),
    );
  }
}
