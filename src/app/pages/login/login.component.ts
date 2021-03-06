import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models';
import { LoginService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.removeLocalStorage();
  }

  onSubmit() {
    this.loginService.post(this.login).subscribe((res) => {
      this.router.navigate(['/m/books']);
    });
  }

  removeLocalStorage() {
    localStorage.removeItem('user');
  }
}
