import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AccountService } from '@app/core/_services';

@Component({
  selector: 'app-secretario-layout',
  templateUrl: './secretario-layout.component.html',
  styleUrls: ['./secretario-layout.component.less']
})
export class SecretarioLayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private accountService: AccountService
  ) {}

  logout() {
    this.accountService.logout();
  }
}
