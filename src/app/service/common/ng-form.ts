import { NgForm } from "@angular/forms";

export function validateNgForm(form: NgForm) {
	for(let control of Object.values(form.controls)) {
		control.markAsDirty();
		control.updateValueAndValidity({onlySelf: true});
	}
}