import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor(
		private fb: FormBuilder
	) {}

	formGroup = this.fb.group({
		email: ['abc', {
			validators: [Validators.required, Validators.email]
		}],
		date: ['2020-07-10', {
			validators: [Validators.required, Validators.email]
		}],
		password: ['', {validators: [Validators.required, Validators.minLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]}]
	});

	ngOnInit() {
		console.log(this.formGroup.controls.email);
	}

	login() {

	}

}
