import { Component, ContentChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { InputDirective } from '../../directive/input.directive';
import { FormControl, NgControl } from '@angular/forms';

let errList = [
	{name: 'required', message(fc: FormControl) {return `${(fc as any).name} is required.`}},
	{name: 'pattern', message(fc: FormControl) {
		let name = (fc as any).name;
		let message = '';
		if(name === 'password') message = 'Password should contain Uppercase, Lowercase numbers and symbols.'
		return message;
	}},
	{name: 'minlength', message(fc: FormControl) {return `Minimum ${fc.errors?.['minlength']?.requiredLength} characters required.`}},
	{name: 'maxlength', message(fc: FormControl) {return `Only ${fc.errors?.['maxlength']?.requiredLength} characters are allowed.`}},
	{name: 'email', message(fc: FormControl) {return `Please provide proper email.`}}
];


@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent{
	@ContentChild(NgControl) control!: FormControl;
	@ContentChild(InputDirective, {read: ElementRef}) input!: ElementRef;

	constructor(private renderer: Renderer2) {}

	message = '';
	errorCount = 0;

	ngOnInt() {
	}
	
	ngAfterContentInit() {
		this.control.statusChanges?.subscribe(event => {
			console.log(event);
			
			let _e = this.control.errors;
			let errors = Object.keys(_e || {});
			this.errorCount = errors.length;
			if(!errList.length) this.message = '';

			let errorFound = false;
			errList.map((el) => {
				if(errorFound) return;
				if(this.control.hasError(el.name)) {
					errorFound = true;
					this.message = el.message(this.control);
				} else {
					this.message = '';
				}
			})

			if(this.control.invalid) {

			}
		})
	}
}
