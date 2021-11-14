import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  
  isAdminPage$: Observable<boolean> = new Observable<boolean>();
  
  showMobileMenu: boolean = false;
  
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
    
    onHamburgerClick(){
      this.showMobileMenu = !this.showMobileMenu;
    }
    
  }
  