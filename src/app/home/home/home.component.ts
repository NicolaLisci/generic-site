import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  
  public blogPosts$: Observable<ScullyRoute[]> | undefined;
  
  constructor(private _scully: ScullyRoutesService) {}
  
  ngOnInit(): void {
    console.log('')
    this.blogPosts$ = this._scully.available$.pipe(
      map((routes: ScullyRoute[]) => {
        console.log(routes)
        return routes.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`));
      })
      );
    }
  }
  