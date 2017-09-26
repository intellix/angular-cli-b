import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { AppService } from '../app.service';

@Component({
  selector: 'red-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url$ = this.appService.navigationEnd$.pipe(
    map(v => v.url),
  );

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
