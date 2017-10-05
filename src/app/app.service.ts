import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter } from 'rxjs/operators';

@Injectable()
export class AppService {

  thing = of('thing');
  navigationEnd$: Observable<NavigationEnd> = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
  );

  constructor(private router: Router) { }

}
