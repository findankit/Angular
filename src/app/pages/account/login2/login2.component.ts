import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {

	constructor(
	) {}

	model = new LoginModel();

	login(form: NgForm) {
	}
}


class LoginModel {
	email!: string;
	password!: string;
}