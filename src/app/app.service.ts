import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter } from 'rxjs/operators';

@Injectable()
export class AppService {

  thing = of('thing');
  navigationEnd$ = of({ url: 'lol' }).pipe(
    filter(v => v.url === 'lol'),
  );

  constructor(private router: Router) { }

}
