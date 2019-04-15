import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authState$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authState$ = this.authService.getAuthStateObserver();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
