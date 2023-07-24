import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { validateNgForm } from 'src/app/service/common/ng-form';

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
		validateNgForm(form);
		if(form.invalid) return;
	}
}


class LoginModel {
	email!: string;
	password!: string;
}